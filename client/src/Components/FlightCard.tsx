import React from 'react'
import { IFlight } from '../Types'
import Container from 'react-bootstrap/Container';
import Button from './Button';

interface IPropsCard {
  flight: IFlight,
  buttonFunction: (p:string)=> void,
}

const FlightCard = ({ flight: { flight_id, departureAt, arrivalAt, prices }, buttonFunction }: IPropsCard) => {

  return (
    <>
      <Container className='d-flex flex-row justify-content-center align-items-center bg-light border border-2 rounded mt-4 mb-2'>
        <div className='d-flex flex-row justify-content-around align-items-center p-2 flex-grow-1 align-self-stretch bg-light'>
          <div className='d-inline-flex p-2 flex-column justify-content-start align-items-center'>
            <span>{departureAt.slice(0, 10)}</span>
            <div className='d-flex flex-row justify-content-center align-items-center pb-0 bg-light'>
              <p className='bg-light'>{`${departureAt.slice(11, 13)}hs`}</p>
              <p className='bg-light'> &nbsp; -- ✈️ -- &nbsp; </p>
              <p className='bg-light'>{`${arrivalAt.slice(11, 13)}hs`}</p>
            </div>
          </div>
          <p className='bg-light'>{flight_id.slice(-7) === 'LAYOVER' ? '1 Layover' : 'Direct Flight'}</p>
          <p className='bg-light'>Baggage Included</p>
        </div>
        <div className='d-inline-flex p-2 flex-column justify-content-start align-items-center bg-light border-start border-2'>
          <p className='bg-light'>{prices.currency}</p>
          <p className='bg-light'>{`${prices.adult} p/p`}</p>
          <Button buttonText='Reserve' buttonFunction={()=> buttonFunction(flight_id)} size='sm' />
        </div>
      </Container>
    </>

  )
}

export default FlightCard