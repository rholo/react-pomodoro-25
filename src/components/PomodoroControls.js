import React, { useContext } from 'react';
import Controls from './Controls';
import { store } from '../store';

const PomodoroControls = () => {
  const { state, dispatch } = useContext(store);
  return (
    <div>
      <Controls
        name="Working"
        timer={state.timer}
        add={() => dispatch({ type: 'INCREMENT_TIMER' })}
        subtract={() => dispatch({ type: 'DECREMENT_TIMER' })}
      />
      <Controls
        name="Breaks"
        timer={state.intervals}
        add={() => dispatch({ type: 'INCREMENT_INTERVALS' })}
        subtract={() => dispatch({ type: 'DECREMENT_INTERVALS' })}
      />
      <Controls
        name="Session"
        timer={state.session}
        add={() => dispatch({ type: 'INCREMENT_SESSION' })}
        subtract={() => dispatch({ type: 'DECREMENT_SESSION' })}
      />
    </div>
  );
};
export default PomodoroControls;
