import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import TimerControls from './components/TimerControls';
import PomodoroControls from './components/PomodoroControls';
import './style.scss';

export default function App() {
  const [timeLength, setTimeLeft] = useState(25);
  const [intervalLength, setIntervalLength] = useState(3);

  const subtract = () => {
    setTimeLeft(timeLeft - 1);
  };
  const add = () => {
    setTimeLeft(timeLeft + 1);
  };

  return (
    <main>
      <Header title="Pomodoro timer" />
      <Timer timeLeft={timeLength} />
      <TimerControls />
      <PomodoroControls intervals={intervalLength} session={timeLength} />
    </main>
  );
}
