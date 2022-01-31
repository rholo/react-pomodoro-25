import React, { useContext } from 'react';
import { store } from './store';
import Header from './components/Header';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';
import PomodoroControls from './components/PomodoroControls';
import './style.scss';

export default function App() {
  const { state } = useContext(store);
  const { timer, intervals } = state;

  return (
    <main>
      <Header title="Pomodoro timer" />
      <Timer timeLeft={state.timer} />
      <TimerControls />
      <PomodoroControls intervals={intervals} session={timer} />
    </main>
  );
}
