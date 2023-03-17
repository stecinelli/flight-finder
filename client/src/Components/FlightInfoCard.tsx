import React from 'react'
import { IFlight } from '../Types'
import Container from 'react-bootstrap/Container';

interface IPropsInfoCard {
  flight: IFlight,
  placeFrom: string,
  placeTo: string
}

const FlightInfoCard = ({ flight: { flight_id, departureAt, arrivalAt, prices }, placeFrom, placeTo }: IPropsInfoCard) => {

  return (
    <Container className='d-flex flex-row justify-content-center align-items-center bg-light border border-2 rounded mt-4 mb-2'>
      <div className='d-flex flex-row justify-content-around align-items-center p-2 flex-grow-1 align-self-stretch bg-light'>
        <div className='d-inline-flex p-2 flex-column justify-content-start align-items-center'>
          <p className='m-0 fs-5 fw-bold'>{placeFrom} - {placeTo}</p>
          <span className='small fw-light'>Flight ID: {flight_id}</span>
        </div>

        <div className='d-inline-flex p-2 flex-column justify-content-start align-items-center'>
          <span>{departureAt.slice(0, 10)}</span>
          <div className='d-flex flex-row justify-content-center align-items-center pb-0 bg-light'>
            <p className='bg-light m-0'>{`${departureAt.slice(11, 13)}hs`}</p>
            <p className='bg-light m-0'> &nbsp; -- ✈️ -- &nbsp; </p>
            <p className='bg-light m-0'>{`${arrivalAt.slice(11, 13)}hs`}</p>
          </div>
        </div>

        <div className='d-inline-flex p-2 flex-column justify-content-start align-items-center'>
          <p className='m-0'>{flight_id.slice(-7) === 'LAYOVER' ? '1 Layover' : 'Direct Flight'}</p>
          <span className='small fw-light'>Baggage Included</span>
        </div>

      </div>

    </Container>
  )
}

export default FlightInfoCard