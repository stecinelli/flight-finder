import { createContext, useContext } from 'react';
import { IContext } from './Types';

export const MainContext = createContext<IContext>({
  flightsList: {},
  setflightsList: () => {},
  search: {}, 
  setSearch: () => {},
  isRound: false, 
  setIsRound: () => {},
  isOneWay: false, 
  setisOneWay: () => {},
  placeFrom: '', 
  setplaceFrom: () => {},
  placeTo: '', 
  setPlaceTo: () => {},
  departureDate: '', 
  setDepartureDate: () => {},
  returnDate: '', 
  setReturnDate: () => {},
  qntAdults: 0, 
  setQntAdults: () => {},
  qntChildren: 0, 
  setQntChildren: () => {},
});

export const useMainContext = () => useContext(MainContext);