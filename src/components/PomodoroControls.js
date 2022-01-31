import React, { useContext } from 'react';
import Controls from './Controls';
import { store } from '../store';

const PomodoroControls = () => {
  const { state, dispatch } = useContext(store);
  return (
    <div>
      <Controls
        name="Session"
        timer={state.timer}
        add={() => dispatch({ type: 'INCREMENT_TIMER' })}
        subtract={() => dispatch({ type: 'DECREMENT_TIMER' })}
      />
      <Controls
        name="Break"
        timer={state.intervals}
        add={() => dispatch({ type: 'INCREMENT_INTERVALS' })}
        subtract={() => dispatch({ type: 'DECREMENT_INTERVALS' })}
      />
    </div>
  );
};
export default PomodoroControls;
