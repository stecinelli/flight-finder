import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from './Button';
import { IBooking, IFlightInfo } from '../Types';

interface IPropsBookCard {
  flightInfo: IFlightInfo,
  bookingInfo: IBooking,
}

const BookingCard = ({
  flightInfo: {
    departureAt,
    flight_id,
    arrivalAt,
    departureDestination,
    arrivalDestination,
  },
  bookingInfo: {
    bookedSeats,
    userName,
  }
}: IPropsBookCard) => {

  const any = () => { }

  return (
    <Container
      className='d-flex flex-row justify-content-center align-items-center 
        bg-light border border-2 rounded mt-4 mb-2'>

      <div
        className='d-flex flex-row justify-content-around align-items-center 
        p-2 flex-grow-1 align-self-stretch bg-light'>

        <div className='d-inline-flex p-2 flex-column justify-content-start 
          align-items-center'>

          <p className='m-0 fs-5 fw-bold'>{departureDestination} - {arrivalDestination}</p>
          <span className='small fw-light'>Flight ID: {flight_id}</span>

        </div>

        <div className='d-inline-flex p-2 flex-column justify-content-start 
          align-items-center'>

          <span>{departureAt.slice(0, 10)}</span>
          <div className='d-flex flex-row justify-content-center 
            align-items-center pb-0 bg-light'>

            <p className='bg-light m-0'>{`${departureAt.slice(11, 13)}hs`}</p>
            <p className='bg-light m-0'> &nbsp; -- ✈️ -- &nbsp; </p>
            <p className='bg-light m-0'>{`${arrivalAt.slice(11, 13)}hs`}</p>

          </div>

        </div>

        <div className='d-inline-flex p-2 flex-column justify-content-start 
          align-items-center'>
          <p className='m-0'>
          Booked for: {userName}
          </p>
          <span className='small fw-light'>Qnt: {bookedSeats}</span>
        </div>

        <div className='d-inline-flex p-2 flex-column justify-content-start 
          align-items-center'>

          <p className='mt-0'><Button buttonText='Edit' buttonFunction={any} size='sm' /></p>
          <p className='mb-0'><Button buttonText='Cancel' buttonFunction={any} size='sm' /></p>

        </div>

      </div>

    </Container>
  )
}

export default BookingCard