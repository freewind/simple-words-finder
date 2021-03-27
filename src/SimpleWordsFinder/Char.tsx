import React, {FC} from 'react';
import classNames from 'classnames';

export type CharType = 'simple' | 'unknown';

type Props = {
  char: string,
  type: CharType,
  onClick: (char: string) => void
}

export const Char: FC<Props> = ({char, type, onClick}) => {
  return <div className={classNames({
    block: true,
    simple: type === 'simple',
  })} onClick={() => onClick(char)}>{char}</div>;
}
