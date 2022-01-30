import React, { createContext, useReducer } from 'react';

const initialState = {
  timer: 25,
  intervals: 3,
};

const store = createContext(initialState);

const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { ...state, timer: state.timer + 1};
      case 'DECREMENT':
        return { ...state, timer: state.timer - 1 };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
