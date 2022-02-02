import React, { useContext, useState, useEffect } from 'react';
import { store } from '../store';
import useInterval from '../hooks/useInterval';
import { Number, Button } from './styled';

const Timer = () => {
  const { state } = useContext(store);
  const { timer } = state;
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(timer);

  //useInterval(() => {
  // setSeconds(seconds -1)
  // }, 1000)

  const startPause = () => {};

  return (
    <>
      <Number size={6}>{timer}</Number>
      <Number size={2}>{seconds}</Number>
      <div>
        <Button onClick={startPause}>Start / Pause</Button>
      </div>
    </>
  );
};
export default Timer;
