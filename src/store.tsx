import React, { createContext, useReducer, Dispatch } from 'react';
import {timerReducer} from './reducers';

const initialState = {
  timer: 3,
  minutes: 3,
  intervals: 2,
  session: 2,
  started: false,
  breath: false,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
