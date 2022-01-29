import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Controls from './components/Controls';
import TimerControls from './components/TimerControls';
import './style.scss';

export default function App() {
  const [timeLeft, setTimeLeft] = useState(25);
  const [sessionStep, setSessionStep] = useState(3);

  const subtract = () => {
    setTimeLeft(timeLeft - 1);
  };
  const add = () => {
    setTimeLeft(timeLeft + 1);
  };

  return (
    <main>
      <Header title="Pomodoro timer" />
      <Timer timeLeft={timeLeft} />
      <TimerControls />

      <Controls
        name="Break"
        timer={sessionStep}
        add={add}
        subtract={subtract}
      />
      <Controls name="Session" timer={timeLeft} add={add} subtract={subtract} />
    </main>
  );
}
