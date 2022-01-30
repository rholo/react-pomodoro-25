import React, { useState, useContext } from 'react';
import { store } from './store';
import Header from './components/Header';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';
import PomodoroControls from './components/PomodoroControls';
import './style.scss';

export default function App() {
  const { state, dispatch } = useContext(store);
  const { timer, intervals } = state;
  const subtract = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const add = () => {
    dispatch({ type: 'INCREMENT' });
  };

  return (
    <main>
      <Header title="Pomodoro timer" />
      <button onClick={add}>add context</button>
      <button onClick={subtract}>remove context</button>
      <Timer timeLeft={state.timer} />
      <TimerControls />
      <PomodoroControls intervals={intervals} session={timer} />
    </main>
  );
}
