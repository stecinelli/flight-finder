import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from './Button';
import Input from './Input';

interface IPropsFormModal {
  show: boolean,
  onHide: () => void,
  buttonFunction: (e: string, f?: string) => void,
}

const FormModal = ({ show, onHide, buttonFunction }: IPropsFormModal) => {
  const [email, setEmail] = useState<string>('')
  const [flight_id, setFlight_id] = useState<string>('')

  const any = () => { }

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
          My Bookings
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Please insert your e-mail to find all yours bookings.</p>
        <Form>
          <Form.Group className="mb-3" controlId="FormInput">
            <Input
              lableName='Email address'
              type='email'
              isRequired={true}
              placeholder='name@example.com'
              autoFocus={true}
              buttonFunction={()=> buttonFunction(email, flight_id)}
              getValueFunction={setEmail} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="FormImput2">
            <Input
              lableName='Flight ID'
              type='text'
              isRequired={false}
              placeholder='a111aa11'
              buttonFunction={()=> buttonFunction(email, flight_id)}
              getValueFunction={setFlight_id} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button buttonText='Search' buttonFunction={()=> buttonFunction(email, flight_id)} />
      </Modal.Footer>
    </Modal>
  )
}

export default FormModal