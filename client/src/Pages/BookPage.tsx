import React from 'react'
import { useMainContext } from '../Context'
import Container from 'react-bootstrap/Container';
import FlightInfoCard from '../Components/FlightInfoCard';
import OneLineSearch from '../Components/OneLineSearch';
import Input from '../Components/Input';
import Button from '../Components/Button';
import CenteredModal from '../Components/CenteredModal';
import { IFlight, IBookInfo } from '../Types';


const BookPage = () => {

  const {
    placeFrom,
    placeTo,
    bookingInfo,
    isRound,
    flightsListDeparture,
    flightsListReturn,
    qntAdults,
    setBookingInfo,
    bookFlight,
    modalShow, setModalShow,
    modalErrorShow, setModalErrorShow
  } = useMainContext();

  const getEmail = (email: string) => {
    setBookingInfo((prevState: IBookInfo | null) => {
      return {
        ...prevState!,
        email: email
      }
    })
  }

  const getName = (name: string) => {
    setBookingInfo((prevState: IBookInfo | null) => {
      return {
        ...prevState!,
        name: name
      }
    })
  }

  const any = () => { }

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

      <Container className='bg-light rounded pb-2 mb-2 d-flex flex-column'>

        <Container className='display-6 mt-3 p-1'>Passenger Information</Container>

        <Container className='d-flex flex-column justify-content-start align-items-start bg-light border border-2 rounded mt-4 mb-4 p-2'>

          <div>
            <Input
              lableName='Name'
              type='text'
              isRequired={true}
              getValueFunction={getName}
              buttonFunction={any} />
          </div>
          <div>
            <Input
              lableName='E-mail'
              type='text'
              isRequired={true}
              getValueFunction={getEmail}
              buttonFunction={any} />
          </div>
        </Container>

        <Button buttonText={'Reserve'} buttonFunction={bookFlight} />

      </Container>

      <CenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        error={modalErrorShow}
      />

      <CenteredModal
        show={modalErrorShow}
        onHide={() => setModalErrorShow(false)}
        error={modalErrorShow}
      />

    </>

  )
}

export default BookPage