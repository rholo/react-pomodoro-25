import React, { useContext } from 'react';
import Controls from './Controls';
import { store } from '../store';

const PomodoroControls = (props) => {
  const { state } = useContext(store);
  return (
    <div>
      <Controls name="Session" timer={state.timer} />
      <Controls name="Break" timer={state.intervals} />
    </div>
  );
};
export default PomodoroControls;
