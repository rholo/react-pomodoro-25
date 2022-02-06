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
        add={() => dispatch({ type: 'INCREASE_TIMER' })}
        subtract={() => dispatch({ type: 'DECREASE_TIMER' })}
      />
      <Controls
        name="Breaks"
        timer={state.intervals}
        add={() => dispatch({ type: 'INCREASE_INTERVALS' })}
        subtract={() => dispatch({ type: 'DECREASE_INTERVALS' })}
      />
      <Controls
        name="Session"
        timer={state.session}
        add={() => dispatch({ type: 'DECREASE_SESSION' })}
        subtract={() => dispatch({ type: 'INCREASE_SESSION' })}
      />
    </div>
  );
};
export default PomodoroControls;
