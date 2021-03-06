import { createContext, useContext, useState } from 'react';
import P from 'prop-types';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext([1, 2]);

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useState(initialState);
  return <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>;
};

CounterContextProvider.propTypes = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);
  if (typeof context === 'undefined') {
    throw new Error('you have to use useCounterContext inside <>');
  }
  return [...context];
};
