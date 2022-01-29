import React, { useEffect } from 'react';
import styled from 'styled-components';

const JumboNumber = styled.strong`
  font-size: 6rem;
  font-weight: normal;
`;

const Timer = (props) => {
  // useEffect for timer
  const timerToClock = (timeLeft) => {
    return timeLeft;
  };
  return <JumboNumber>{timerToClock(props.timeLeft)}</JumboNumber>;
};
export default Timer;
