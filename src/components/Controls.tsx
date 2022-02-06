import React from 'react';
import { RoundButton, FlexCenter, Number } from './styled';
type IControl = {
  name: String,
  timer: Number,
  subtract: Function,
  add: Function
}
const Controls = ({ name = '', timer, subtract, add }: IControl) => {
  return (
    <FlexCenter direction="column">
      <h5>{name}</h5>
      <FlexCenter>
        <RoundButton color="white" onClick={() => subtract()}>
          -
        </RoundButton>
        <Number size={2}>{timer}</Number>
        <RoundButton color="white" onClick={() => add()}>
          +
        </RoundButton>
      </FlexCenter>
    </FlexCenter>
  );
};

export default Controls;
