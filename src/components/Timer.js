import React, { useEffect } from 'react';
import { Number } from './styled';

const Timer = (props) => {
  // useEffect for timer
  const timerToClock = (timeLeft) => {
    return timeLeft;
  };
  return (
    <>
      <Number size={9}>{timerToClock(props.timeLeft)}</Number>
      <Number size={2}>59</Number>
    </>
  );
};
export default Timer;
