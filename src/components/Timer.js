import React, { useContext, useState } from 'react';
import { store } from '../store';
import useInterval from '../hooks/useInterval';
import { Number, Button } from './styled';

const Timer = () => {
  const { state, dispatch } = useContext(store);
  const { session, started, minutes, breath } = state;
  const [seconds, setSeconds] = useState(5);
  const [buttonLabel, setButtonLabel] = useState('Start');
  const timerCheck = () => {
    if (started) {
      if (seconds === 0) {
        dispatch({type: 'COUNTDOWN'})
        if (minutes === 0) {
          dispatch({type: 'SET_MINUTES'})
          dispatch({type:'TOGGLE_BREATH'})
          dispatch({type:`${!breath ? 'DECREMENT_SESSION':'DECREMENT_INTERVALS'}`})
          
          if (session === 0) {
            return startPause()
          }
        }
      }
      setSeconds(seconds === 0 ? 10 : seconds -1);
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
