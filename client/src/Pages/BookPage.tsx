import React, { useEffect } from 'react'
import { useMainContext } from '../Context'
import Container from 'react-bootstrap/Container';
import FlightInfoCard from '../Components/FlightInfoCard';
import OneLineSearch from '../Components/OneLineSearch';
import { IFlight } from '../Types';


const BookPage = () => {

  const {
    placeFrom,
    placeTo,
    bookingInfo,
    isRound,
    flightsListDeparture,
    flightsListReturn,
    qntAdults
  } = useMainContext();

  const deparFlight: IFlight | null | undefined = flightsListDeparture && flightsListDeparture!
    .filter((flight: IFlight) => flight.flight_id === bookingInfo!.departureFlight)[0];

  const retFlight: IFlight | null | undefined = flightsListReturn && flightsListReturn!
    .filter((flight: IFlight) => flight.flight_id === bookingInfo!.returnFlight)[0];

  return (
    <>
      <OneLineSearch />

      <Container className='bg-light rounded pb-2 mb-2'>

        <Container className='display-6 mt-3 p-1'>Flights Information</Container>

        {flightsListDeparture &&
          <FlightInfoCard flight={deparFlight!} placeFrom={placeFrom} placeTo={placeTo} />
        }

        {isRound &&
          flightsListReturn &&
          <FlightInfoCard flight={retFlight!} placeFrom={placeTo} placeTo={placeFrom} />
        }

      </Container>

      <Container className='bg-light rounded pb-2 mb-2'>

        <Container className='display-6 mt-3 p-1'>Price</Container>

        <Container className='d-flex flex-row justify-content-start align-items-start bg-light border border-2 rounded mt-4 mb-2'>
          <div className='d-inline-flex p-2 flex-column justify-content-start align-items-start'>
            <p className='m-0 fs-5 fw-bold'>
              Total: &nbsp;
              {deparFlight
                ? deparFlight.prices.currency
                : ''} &nbsp;
              {retFlight && deparFlight
                ? (deparFlight.prices.adult * qntAdults) + (retFlight.prices.adult * qntAdults)
                : deparFlight
                  ? (deparFlight.prices.adult * qntAdults)
                  : ''
              }
            </p>
            <span className='small fw-light'>
              Dep: {deparFlight && (deparFlight.prices.adult * qntAdults)}
              {retFlight && `+ Ret: ${(retFlight.prices.adult * qntAdults)}`}
            </span>
          </div>
        </Container>

      </Container>

      <Container className='d-flex flex-row justify-content-start align-items-start bg-light border border-2 rounded mt-4 mb-2'>

      </Container>
    </>

  )
}

export default BookPage