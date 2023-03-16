import React from 'react'
import FlightCard from '../Components/FlightCard'
import { Container } from 'react-bootstrap';


const Bookings = () => {
  const fake = {
    "flight_id": "a444cd64",
    "departureAt": "2023-03-30T11:00:00.000Z",
    "arrivalAt": "2023-03-30T14:00:00.000Z",
    "availableSeats": 82,
    "prices": {
      "currency": "SEK",
      "adult": 96.31,
      "child": 64.35
    }
  }

  return (
    <Container>
      <Container>Bookings</Container>
      <FlightCard flight={fake} />
      <FlightCard flight={fake} />
    </Container>
  )
}

export default Bookings