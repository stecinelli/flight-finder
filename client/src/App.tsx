import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom'
import { MainContext } from './Context';
import './App.css';
import Navegation from './Components/Navegation';
import Footer from './Components/Footer';
import { ISearch } from './Types';


function App() {
  const [search, setSearch] = useState<object>({})
  const [isRound, setIsRound] = useState<boolean>(false)
  const [isOneWay, setisOneWay] = useState<boolean>(false)
  const [placeFrom, setplaceFrom] = useState<string>('')
  const [placeTo, setPlaceTo] = useState<string>('')
  const [departureDate, setDepartureDate] = useState<string>('')
  const [returnDate, setReturnDate] = useState<string>('')
  const [qntAdults, setQntAdults] = useState<number>(0)
  const [qntChildren, setQntChildren] = useState<number>(0)
  const [flightsList, setflightsList] = useState<object>({})

  const contextValue = useMemo(() => ({
    flightsList, setflightsList,
    search, setSearch,
    isRound, setIsRound,
    isOneWay, setisOneWay,
    placeFrom, setplaceFrom,
    placeTo, setPlaceTo,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    qntAdults, setQntAdults,
    qntChildren, setQntChildren,
  }), [
    flightsList, setflightsList,
    search, setSearch,
    isRound, setIsRound,
    isOneWay, setisOneWay,
    placeFrom, setplaceFrom,
    placeTo, setPlaceTo,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    qntAdults, setQntAdults,
    qntChildren, setQntChildren,
  ]);

  const getFlightsList = () => {
    let departureToBeSearched = {};
    let returnToBeSearched = {};

    if (isOneWay) {
      if (departureDate !== '') {
        departureToBeSearched = {
          departureDestination: placeFrom,
          arrivalDestination: placeTo,
          date: departureDate
        }
      } else {
        departureToBeSearched = {
          departureDestination: placeFrom,
          arrivalDestination: placeTo,
        }
      }
      // feach
    }

    if (isRound) {
      if (departureDate !== '' && returnDate !== '') {
        departureToBeSearched = {
          departureDestination: placeFrom,
          arrivalDestination: placeTo,
          date: departureDate
        }
        returnToBeSearched = {
          departureDestination: placeTo,
          arrivalDestination: placeFrom,
          date: returnDate
        }
        // feach 2x
      } else {
        departureToBeSearched = {
          departureDestination: placeFrom,
          arrivalDestination: placeTo,
        }
        returnToBeSearched = {
          departureDestination: placeTo,
          arrivalDestination: placeFrom,
        }
        // feach 2x
      }
    }
  }

  return (
    <MainContext.Provider value={contextValue}>
      <Navegation />
      <div className='bg'>
        <Outlet />
      </div>
      <Footer />
    </MainContext.Provider>
  );
}
export default App;
