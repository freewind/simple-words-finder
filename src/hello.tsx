import React, {FC, useState} from 'react';
import {SimpleWordsFinder} from './SimpleWordsFinder';
import classNames from 'classnames';

type Props = {};

const BOOK_KEY1 = 'simpleWords1';
const BOOK_KEY2 = 'simpleWords2';

export const Hello: FC<Props> = ({}) => {
  const [bookKey, setBookKey] = useState(BOOK_KEY1)
  return <div>
    <h1>Hello Words</h1>
    <button onClick={() => setBookKey(BOOK_KEY1)} className={classNames({currentBook: bookKey === BOOK_KEY1})}>Book1
    </button>
    <button onClick={() => setBookKey(BOOK_KEY2)} className={classNames({currentBook: bookKey === BOOK_KEY2})}>Book2
    </button>
    <SimpleWordsFinder bookKey={bookKey}/>
  </div>;
}
