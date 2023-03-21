import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { useMainContext } from '../Context'
import Button from './Button';

interface IPropsModal {
  error: boolean,
  show: boolean,
  onHide: () => void,
}

const CenteredModal = ({error, show, onHide }: IPropsModal) => {
  const { 
    setBookingInfo, 
    setModalShow,
    setModalErrorShow
   } = useMainContext();
  
  let navigate = useNavigate();
  
  const goHomePage = () => {
    let path = `/`;
    navigate(path);

    window.location.reload();

  }

  return (
    <Modal
      onHide={onHide}
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Your Booking
        </Modal.Title>
      </Modal.Header>
      {!error &&
        <Modal.Body>
          <h4>Booking completed!</h4>
          <p>
            Flight booking successfully made. Thanks for booking with us!
            For booking changes visit our website in the section 'My Bookings'.
          </p>
        </Modal.Body>
      }
      {error &&
        <Modal.Body>
          <h4>Booking Error</h4>
          <p>
            It was not possible to book the requested flight.
            Please try again by modifying the search parameters.
          </p>
        </Modal.Body>
      }

      <Modal.Footer>
        <Button buttonText='Close' buttonFunction={goHomePage} />
      </Modal.Footer>
    </Modal>
  )
}

export default CenteredModal