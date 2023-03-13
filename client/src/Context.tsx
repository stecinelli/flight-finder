import { createContext, useContext } from 'react';
import { IContext } from './Types';

export const MainContext = createContext<IContext>({
  flightsList: [],
  setflightsList: () => {},
});

export const useMainContext = () => useContext(MainContext);