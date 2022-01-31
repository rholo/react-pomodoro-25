import React, { createContext, useReducer } from 'react';

const initialState = {
  timer: 25,
  intervals: 5,
  session: 5,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT_SESSION':
        return { ...state, session: state.session + 1 };
      case 'DECREMENT_SESSION':
        return { ...state, session: state.session - 1 };
      case 'INCREMENT_INTERVALS':
        return { ...state, intervals: state.intervals + 1 };
      case 'DECREMENT_INTERVALS':
        return {
          ...state,
          intervals: state.intervals > 0 ? state.intervals - 1 : 0,
        };
      case 'INCREMENT_TIMER':
        return { ...state, timer: state.timer + 1 };
      case 'DECREMENT_TIMER':
        return { ...state, timer: state.timer > 0 ? state.timer - 1 : 0 };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
