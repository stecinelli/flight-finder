import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import BookingCard from '../Components/BookingCard';
import FormModal from '../Components/FormModal';
import OneLineSearch from '../Components/OneLineSearch';
import { IBooking, IFlightInfo } from '../Types';




const Bookings = () => {
  const [modalShow, setModalShow] = useState<boolean>(true)
  const [bookingList, setBookingList] = useState<IBooking[]>([])
  const [flightInfo, setFlightInfo] = useState<IFlightInfo[]>([])


  const searchBookings = async (email: string, flight_id?: string) => {
    const response = await fetch(
      `http://localhost:8080/api/booking?email=${email}${flight_id !== undefined ? '&flight_id=' + flight_id : ''}`);
    const data: IBooking[] = await response.json();
    setBookingList(data);
  }

  useEffect(() => {
    bookingList!.map(async (booking: IBooking) => {
      const response = await fetch(
        `http://localhost:8080/api/flights/${booking.flight_id}`);
      const data: IFlightInfo = await response.json();

      setFlightInfo(prevState => [...prevState, data])
    })
  }, [bookingList])
  
  useEffect(() => {
    if(flightInfo.length > 0) {
      setModalShow(false)
    }
  }, [flightInfo])
 
  return (
    <>
      <OneLineSearch />

      <Container className='bg-light rounded pb-2 mb-2'>
        <FormModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          buttonFunction={searchBookings}
        />

        <Container className='display-6 mt-3 p-1'>My Bookings</Container>

        {bookingList && bookingList.length > 0 && bookingList.map((booking: IBooking) => {
          const flightInfoToSend: IFlightInfo | undefined = flightInfo
            .find(flight => flight.flight_id === booking.flight_id)
          
          if (flightInfoToSend !== undefined) {
            return <BookingCard flightInfo={flightInfoToSend} bookingInfo={booking} key={booking.flight_id} />
          }

        })}

      </Container>
    </>
  )
}

export default Bookings