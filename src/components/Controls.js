import React from 'react';
import { RoundButton, FlexCenter, Number } from './styled';

const Controls = ({ name = '', timer, subtract, add }) => {
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
