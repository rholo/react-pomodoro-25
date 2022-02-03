import React, { useContext, useState } from 'react';
import { store } from '../store';
import useInterval from '../hooks/useInterval';
import { Number, Button } from './styled';

const Timer = () => {
  const { state, dispatch } = useContext(store);
  const { started, minutes, breath, session } = state;
  const [seconds, setSeconds] = useState(10);
  const [buttonLabel, setButtonLabel] = useState('Start');

  useInterval(
    () => {
      if (started) {
        setSeconds(seconds - 1);
        if (minutes > 0 && seconds === 0) {
          dispatch({ type: 'DECREMENT_SESSION' });
        }
        if (seconds === 0 && minutes > 0) {
          dispatch({ type: 'COUNTDOWN' });
          setSeconds(10);
        }
      }
    },
    !started ? null : 1000
  );

  const startPause = () => {
    setButtonLabel(!started ? 'Pause' : 'Start');
    dispatch({ type: 'TOGGLE_START' });
    // setStart(!start);
  };

  return (
    <>
      <Number size={6}>{minutes}</Number>
      <Number size={2}>{seconds}</Number>
      <div>
        <Button onClick={startPause}>{buttonLabel}</Button>
      </div>
      <span>{breath ? 'Descanso' : 'Trabajo'}</span>
    </>
  );
};
export default Timer;
