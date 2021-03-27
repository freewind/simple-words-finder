import React, {FC} from 'react';
import {SimpleWordsFinder} from './SimpleWordsFinder';

type Props = {};

export const Hello: FC<Props> = ({}) => {
  return <div>
    <h1>Hello React</h1>
    <SimpleWordsFinder/>
  </div>;
}
