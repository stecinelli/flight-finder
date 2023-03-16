import React from 'react'
import { IFlight } from '../Types';
import { useMainContext } from '../Context'
import Container from 'react-bootstrap/Container';
import OneLineSearch from '../Components/OneLineSearch';
import FlightCard from '../Components/FlightCard';


const SearchResult = () => {
  const {
    placeFrom,
    placeTo,
    isRound,
    flightsListDeparture,
    flightsListReturn
  } = useMainContext();

  return (
    <>
      <OneLineSearch />

      {placeFrom &&
      <Container className='bg-light rounded pb-2'>
        <Container className='h3 mt-3 p-1'>{placeFrom} to {placeTo}</Container>
        {flightsListDeparture?.map((flight: IFlight) =>
          <FlightCard flight={flight} key={flight.flight_id} />)
        }
      </Container>}

      {isRound &&
        <Container className='bg-light rounded pb-2'>
          <Container className='h3 mt-3 bg-light'>{placeTo} to {placeFrom}</Container>
          {flightsListReturn?.map((flight: IFlight) =>
            <FlightCard flight={flight} key={flight.flight_id} />)
          }
        </Container>}
    </>
  )
}

export default SearchResult