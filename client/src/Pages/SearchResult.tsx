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
    flightsListReturn,
    isDeparSelec,
    selectDeparFlight,
    selectRetFlight
  } = useMainContext();

  return (
    <>
      <OneLineSearch />

      {placeFrom &&
      <Container className='bg-light rounded pb-2'>
        <Container className='display-6 mt-3 p-1'>{placeFrom} to {placeTo}</Container>
        {!isDeparSelec && 
          flightsListDeparture?.map((flight: IFlight) =>
            <FlightCard flight={flight} key={flight.flight_id} buttonFunction={selectDeparFlight} />)
        }
        {isDeparSelec && 
          <p>You selected the Departure flight. Plese, select a Return flight to continue your reservation.</p>
        }
      </Container>}

      {isRound && isDeparSelec &&
        <Container className='bg-light rounded pb-2'>
          <Container className='display-6 mt-3 bg-light'>{placeTo} to {placeFrom}</Container>
          {flightsListReturn?.map((flight: IFlight) =>
            <FlightCard flight={flight} key={flight.flight_id} buttonFunction={selectRetFlight} />)
          }
        </Container>}
    </>
  )
}

export default SearchResult