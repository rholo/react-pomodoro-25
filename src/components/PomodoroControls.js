import React from 'react';
import Controls from './Controls';
const PomodoroControls = (props) => {
  return (
    <div>
      <Controls name="Session" timer={props.session} />
      <Controls name="Break" timer={props.intervals} />
    </div>
  );
};
export default PomodoroControls;
