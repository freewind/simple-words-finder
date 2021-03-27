import React, {FC, useState, useMemo} from 'react';
import {Char, CharType} from './Char';
import './SimpleWordsFinder.pcss';

const KEY = 'simpleKeys';

export const SimpleWordsFinder: FC = ({}) => {
  const [value, setValue] = useState('');

  const [simpleChars, setSimpleChars] = useState<string[]>([]);
  const [viewSimpleChars, setViewSimpleChars] = useState(false);

  const chars = useMemo(() => [...value], [value])

  function handleClick(char: string): void {
    switch (getCharType(char)) {
      case 'simple': {
        setSimpleChars(items => items.filter(it => it !== char))
        return;
      }
      case 'unknown' : {
        setSimpleChars(items => [...items, char])
        return;
      }
    }
  }

  function getCharType(char: string): CharType {
    if (simpleChars.includes(char)) {
      return 'simple';
    }
    return 'unknown'
  }

  function load() {
    const simpleChars = window.localStorage.getItem(KEY) ?? ''
    setSimpleChars([...simpleChars])
  }

  function save() {
    window.localStorage.setItem(KEY, simpleChars.join(''))
  }

  function toggleViewSimpleChars() {
    setViewSimpleChars(v => !v);
  }

  return <div>
    <button type={'button'} onClick={() => load()}>Load</button>
    <button type={'button'} onClick={() => save()}>Save to local storage ({simpleChars.length})</button>
    <button type={'button'} onClick={() => toggleViewSimpleChars()}>View simple chars ({simpleChars.length})</button>
    <div>
      <div hidden={!viewSimpleChars}>
        {[...simpleChars].map(char => <Char char={char} type={'unknown'}
                                            onClick={() => setSimpleChars(items => items.filter(it => it !== char))}/>)}
      </div>
    </div>
    <div>
      <textarea value={value} onChange={(event) => setValue(event.target.value)}
                className={'textarea'}>{value}</textarea>
    </div>
    <div>
      {chars.map(char => <Char char={char} onClick={handleClick} type={getCharType(char)}/>)}
    </div>
  </div>;
}
