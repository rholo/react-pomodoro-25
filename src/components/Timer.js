import React, { useContext, useState } from 'react';
import { store } from '../store';
import { Number, Button } from './styled';

const Timer = () => {
  const { state } = useContext(store); 
  const { timer } = state;
  const [seconds, setSeconds] = useState(59);
  const startPause = () => {
    setSeconds(seconds - 1);
  }
  return (
    <>
      <Number size={9}>{timer}</Number>
      <Number size={2}>{seconds}</Number>
      <div>
        <Button onClick={startPause}>Start / Pause</Button>
    </div>
    </>
  );
};
export default Timer;
