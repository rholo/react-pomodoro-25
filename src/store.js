import React, { createContext, useReducer } from 'react';

const initialState = {
  timer: 25,
  minutes: 25,
  intervals: 5,
  session: 5,
  started: false,
  breath: false,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'TOGGLE_START': {
        return { ...state, started: !state.started };
      }
      case 'COUNTDOWN':
        if (state.minutes === 0 && state.session > 0) {
          return { ...state, minutes: state.intervals, breath: true };
        }
        if (state.session === 0 && state.minutes === 0) {
          return {...state, started: false, breath: false}
        }
        if (state.minutes === 0 && state.breath) {
          return { ...state, minutes: state.timer, breath: false };
        }
        return { ...state, minutes: state.minutes - 1, breath: false };
      case 'INCREMENT_SESSION':
        return { ...state, session: state.session + 1 };
      case 'DECREMENT_SESSION':
        return { ...state, session: state.session > 0 ? state.session - 1 : 0 };
      case 'INCREMENT_INTERVALS':
        return { ...state, intervals: state.intervals + 1 };
      case 'DECREMENT_INTERVALS':
        return {
          ...state,
          intervals: state.intervals > 0 ? state.intervals - 1 : 0,
        };
      case 'INCREMENT_TIMER':
        return { ...state, timer: state.timer + 1, minutes: state.timer + 1 };
      case 'DECREMENT_TIMER':
        const timer = state.timer > 0 ? state.timer - 1 : 0;
        return { ...state, timer, minutes: timer };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
