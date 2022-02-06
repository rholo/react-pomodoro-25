import React, { createContext, useReducer, Dispatch } from 'react';
import { timerReducer, IState, Action } from './reducers';

const initialState = {
  timer: 3,
  minutes: 3,
  intervals: 2,
  session: 2,
  started: false,
  breath: false,
};
interface TimerReducer {
  state: IState,
  dispatch: Dispatch<Action>
}

const TimerContext = createContext<TimerReducer>({state: initialState, dispatch: () => {}});

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
};

export { TimerContext as store, StateProvider };
