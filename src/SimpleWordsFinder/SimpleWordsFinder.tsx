import React, {FC, useState, useMemo, useEffect} from 'react';
import {Word, WordType} from './Word';
import './SimpleWordsFinder.pcss';
import {findWords} from './findWords';

const KEY = 'simpleKeys';

export const SimpleWordsFinder: FC = () => {
  const [value, setValue] = useState('');

  const [simpleWords, setSimpleWords] = useState<string[]>([]);
  const [viewSimpleWords, setViewSimpleWords] = useState(false);

  const words = useMemo(() => findWords(value), [value])

  function handleClick(word: string): void {
    switch (getWordType(word)) {
      case 'simple': {
        setSimpleWords(items => items.filter(it => it !== word))
        return;
      }
      case 'unknown' : {
        setSimpleWords(items => [...items, word])
        return;
      }
    }
  }

  useEffect(() => {
    const simpleWords = window.localStorage.getItem(KEY) ?? ''
    setSimpleWords([...simpleWords])
  }, [])

  useEffect(() => {
    window.localStorage.setItem(KEY, simpleWords.join(''))
  }, [simpleWords])

  function getWordType(word: string): WordType {
    if (simpleWords.includes(word)) {
      return 'simple';
    }
    return 'unknown'
  }

  function toggleViewSimpleWords() {
    setViewSimpleWords(v => !v);
  }

  return <div>
    <button type={'button'} onClick={() => toggleViewSimpleWords()}>View simple words ({simpleWords.length})</button>
    <div>
      <div hidden={!viewSimpleWords} className={'simpleWordsPanel'}>
        {[...simpleWords].map(word => <Word word={word} type={'unknown'}
                                            onClick={() => setSimpleWords(items => items.filter(it => it !== word))}/>)}
      </div>
    </div>
    <div>
      <textarea value={value} onChange={(event) => setValue(event.target.value)}
                className={'textarea'}>{value}</textarea>
    </div>
    <div>
      {words.map(word => <Word word={word} onClick={handleClick} type={getWordType(word)}/>)}
    </div>
  </div>;
}
