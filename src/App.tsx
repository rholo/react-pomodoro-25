import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Header from './components/Header';
import Timer from './components/Timer';
import PomodoroControls from './components/PomodoroControls';
import './style.scss';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <main>
      <Header title="Pomodoro timer 25" />
      <Timer />
      <PomodoroControls />
    </main>
    </ThemeProvider>
  );
}
