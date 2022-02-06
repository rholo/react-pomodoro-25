import React from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import PomodoroControls from './components/PomodoroControls';
import './style.scss';

export default function App() {
  return (
    <main>
      <Header title="Pomodoro timer 25" />
      <Timer />
      <PomodoroControls />
    </main>
  );
}
