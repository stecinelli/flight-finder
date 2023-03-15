import { createContext, useContext } from 'react';
import { IContext } from './Types';

export const MainContext = createContext<IContext>({
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
  flightsListReturn: null,
  setflightsListReturn: () => {},
  flightsListDeparture: null,
  setflightsListDeparture: () => {},
  getFlightsList: () => {},
});

export const useMainContext = () => useContext(MainContext);