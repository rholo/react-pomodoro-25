import React from 'react';
import styled from 'styled-components';
import RoundButton from './RoundButton';

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Controls = ({ name = '', timer, subtract, add }) => {
  return (
    <div>
      <h5>{name}</h5>
      <FlexWrapper>
        <RoundButton onClick={() => add()}>M</RoundButton>
        <strong>{timer}</strong>
        <RoundButton onClick={() => subtract()}>L</RoundButton>
      </FlexWrapper>
    </div>
  );
};

export default Controls;
