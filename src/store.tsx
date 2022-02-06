import React, { createContext, useReducer } from 'react';

type IState = {
  timer: Number,
  minutes: Number,
  intervals: Number,
  session: Number,
  started: Boolean,
  breath: Boolean
}

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
  const [state, dispatch] = useReducer((state: IState, action: any) => {
    switch (action.type) {
      case 'RESTART':
        return {...initialState}
      case 'TOGGLE_START': {
        return { ...state, started: !state.started };
      }
      case 'TOGGLE_BREATH': 
        return {...state, breath: !state.breath};
      case 'SET_MINUTES':
        return {...state, minutes: !state.breath ? state.timer : state.intervals}
      case 'COUNTDOWN':
        return { ...state, minutes: state.minutes > 0 ? state.minutes - 1 : 0 };
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
