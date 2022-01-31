import React from 'react';
import { RoundButton, FlexWrapper, Number } from './styled';

const Controls = ({ name = '', timer, subtract, add }) => {
  return (
    <div>
      <h5>{name}</h5>
      <FlexWrapper>
        <RoundButton onClick={() => add()}>M</RoundButton>
        <Number size={2}>{timer}</Number>
        <RoundButton onClick={() => subtract()}>L</RoundButton>
      </FlexWrapper>
    </div>
  );
};

export default Controls;
