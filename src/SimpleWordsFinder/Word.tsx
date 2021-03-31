import React, {FC} from 'react';
import classNames from 'classnames';

export type WordType = 'simple' | 'unknown';

type Props = {
  word: string,
  type: WordType,
  onClick: (word: string) => void
}

export const Word: FC<Props> = ({word, type, onClick}) => {
  return <div className={classNames({
    block: true,
    simple: type === 'simple',
  })} onClick={() => onClick(word)}>{word}</div>;
}
