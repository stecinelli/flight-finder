import React, { useState, useMemo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'
import { MainContext } from './Context';
import './App.css';
import Navegation from './Components/Navegation';
import Footer from './Components/Footer';
import { ISearch, IFlight, IFlightsRoute, IBooking, IBookInfo } from './Types';


function App() {
  const [isRound, setIsRound] = useState<boolean>(false)
  const [isOneWay, setisOneWay] = useState<boolean>(false)
  const [placeFrom, setplaceFrom] = useState<string>('')
  const [placeTo, setPlaceTo] = useState<string>('')
  const [departureDate, setDepartureDate] = useState<string>('')
  const [returnDate, setReturnDate] = useState<string>('')
  const [qntAdults, setQntAdults] = useState<number>(0)
  const [qntChildren, setQntChildren] = useState<number>(0)
  const [flightsListDeparture, setflightsListDeparture] = useState<IFlight[] | undefined>([])
  const [flightsListReturn, setflightsListReturn] = useState<IFlight[] | undefined>([])
  const [isDeparSelec, setIsDeparSelec] = useState<boolean>(false)
  const [bookingInfo, setBookingInfo] = useState<IBookInfo | null>(null)
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [modalErrorShow, setModalErrorShow] = useState<boolean>(false);

  let navigate = useNavigate();

  const getFlightsList = async () => {
    let departureToBeSearched: ISearch | null = null;
    let returnToBeSearched: ISearch | null = null;

    if (placeFrom === '' || placeTo === '') return

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
    setflightsListDeparture(data!.itineraries)

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
      setflightsListReturn(data!.itineraries)

    }

    let path = `/searchResult`;
    navigate(path);

  }

  const selectDeparFlight = (flight_id: string) => {
    let path = `/bookFlight`;

    setBookingInfo({
      departureFlight: flight_id,
    })

    isOneWay
      ? navigate(path)
      : setIsDeparSelec(true)

  }

  const selectRetFlight = (flight_id: string) => {
    let path = `/bookFlight`;

    setBookingInfo((prevState: IBookInfo | null) => {
      return {
        ...prevState!,
        returnFlight: flight_id
      }
    })

    navigate(path);
  }

  const bookFlight = async () => {

    let booking: IBooking | null = {
      flight_id: bookingInfo!.departureFlight,
      bookedSeats: qntAdults,
      userName: bookingInfo!.name!,
      email: bookingInfo!.email!
    }

    let bookStatus = {
      statusDep: false,
      statusRet: false
    }

    const response = await fetch(`http://localhost:8080/api/booking`, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(booking)
    });
    const status: boolean = response.ok;
    bookStatus.statusDep = status;

    if (isRound) {
      booking = {
        ...booking,
        flight_id: bookingInfo!.returnFlight!
      }

      const response = await fetch(`http://localhost:8080/api/booking`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(booking)
      });
      const status: boolean = response.ok;
      bookStatus.statusRet = status;
    }

    isOneWay 
    ? bookStatus.statusDep 
      ? setModalShow(true) 
      : setModalErrorShow(true) 
    : bookStatus.statusDep && bookStatus.statusRet 
      ? setModalShow(true) 
      : setModalErrorShow(true)
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
    isDeparSelec, setIsDeparSelec,
    getFlightsList,
    selectDeparFlight,
    selectRetFlight,
    bookingInfo, setBookingInfo,
    modalShow, setModalShow,
    modalErrorShow, setModalErrorShow,
    bookFlight

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
    flightsListReturn, setflightsListReturn,
    isDeparSelec, setIsDeparSelec,
    bookingInfo, setBookingInfo,
    modalShow, setModalShow,
    modalErrorShow, setModalErrorShow
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
