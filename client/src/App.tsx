import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom'
import { MainContext } from './Context';
import './App.css';
import Navegation from './Components/Navegation';
import Footer from './Components/Footer';
import { ISearch, IFlightsRoute } from './Types';


function App() {
  const [isRound, setIsRound] = useState<boolean>(false)
  const [isOneWay, setisOneWay] = useState<boolean>(false)
  const [placeFrom, setplaceFrom] = useState<string>('')
  const [placeTo, setPlaceTo] = useState<string>('')
  const [departureDate, setDepartureDate] = useState<string>('')
  const [returnDate, setReturnDate] = useState<string>('')
  const [qntAdults, setQntAdults] = useState<number>(0)
  const [qntChildren, setQntChildren] = useState<number>(0)
  const [flightsListDeparture, setflightsListDeparture] = useState<IFlightsRoute | null>(null)
  const [flightsListReturn, setflightsListReturn] = useState<IFlightsRoute | null>(null)

  const getFlightsList = async () => {
    let departureToBeSearched: ISearch | null = null;
    let returnToBeSearched: ISearch | null = null;

    if(placeFrom || placeTo === '') return

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

    const response = await fetch(
      `http://localhost:8080/api/flights?departureDestination=${departureToBeSearched.departureDestination}&arrivalDestination=${departureToBeSearched.arrivalDestination}${departureDate !== '' ? '&date=' + departureToBeSearched.date : ''}`);
    const data: IFlightsRoute | null = await response.json();
    console.log('DepData', data);
    setflightsListDeparture(data)

    if (isRound) {
      if (returnDate !== '') {
        returnToBeSearched = {
          departureDestination: placeTo,
          arrivalDestination: placeFrom,
          date: returnDate
        }
      } else {
        returnToBeSearched = {
          departureDestination: placeTo,
          arrivalDestination: placeFrom,
        }
      }

      const response = await fetch(
        `http://localhost:8080/api/flights?departureDestination=${returnToBeSearched.departureDestination}&arrivalDestination=${returnToBeSearched.arrivalDestination}${returnDate !== '' ? '&date=' + returnToBeSearched.date : ''}`);
      const data: IFlightsRoute | null = await response.json();
      console.log('RetData', data);
      setflightsListReturn(data)

    }
  }

  const contextValue = useMemo(() => ({
    isRound, setIsRound,
    isOneWay, setisOneWay,
    placeFrom, setplaceFrom,
    placeTo, setPlaceTo,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    qntAdults, setQntAdults,
    qntChildren, setQntChildren,
    flightsListDeparture, setflightsListDeparture,
    flightsListReturn, setflightsListReturn,
    getFlightsList,

  }), [
    isRound, setIsRound,
    isOneWay, setisOneWay,
    placeFrom, setplaceFrom,
    placeTo, setPlaceTo,
    departureDate, setDepartureDate,
    returnDate, setReturnDate,
    qntAdults, setQntAdults,
    qntChildren, setQntChildren,
    flightsListDeparture, setflightsListDeparture,
    flightsListReturn, setflightsListReturn
  ]);

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
