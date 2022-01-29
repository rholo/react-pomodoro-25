import React, { useEffect } from 'react';
import styled from 'styled-components';

const JumboNumber = styled.strong`
  font-size: 3rem;
  font-weight: normal;
`;

const Timer = (props) => {
  // useEffect for timer
  const timerToClock = (timeLeft) => {
    return timeLeft;
  };
  return (
    <div className="text-center my-3">
      <JumboNumber>{timerToClock(props.timeLeft)}</JumboNumber>
    </div>
  );
};
export default Timer;
