import React, { useContext, useState } from 'react';
import { store } from '../store';
import useInterval from '../hooks/useInterval';
import { Number, Button } from './styled';

const Timer = () => {
  const { state, dispatch } = useContext<any>(store);
  const { session, started, minutes, breath } = state;
  const [seconds, setSeconds] = useState(5);
  const [buttonLabel, setButtonLabel] = useState('Start');

  const timerCheck = () => {
    if (started) {
      if (seconds === 0) {
        dispatch({type: 'COUNTDOWN'})
        if (minutes === 0) {
          dispatch({type:'TOGGLE_BREATH'})
          dispatch({type: 'SET_MINUTES'})
          console.log({minutes, seconds, session, breath})
          if (breath) {
            dispatch({type: 'DECREMENT_SESSION'})
          }
          if (session === 0) {
            startPause()
            return dispatch({type: 'RESTART'})
          }
        }
      }
      setSeconds(seconds === 0 ? 5 : seconds -1);
    }
  }
  const startPause = () => {
    setButtonLabel(!started ? 'Pause' : 'Start');
    dispatch({ type: 'TOGGLE_START' });
    // setStart(!start);
  };
  useInterval(
    () => timerCheck(), !started ? null : 1000
  );
  return (
    <>
      <Number size={6}>{minutes}</Number>
      <Number size={2}>{seconds}</Number>
      <Button onClick={startPause}>{buttonLabel}</Button>
      <span>{breath ? 'Take a rest!' : 'Working'}</span>
    </>
  );
};
export default Timer;
