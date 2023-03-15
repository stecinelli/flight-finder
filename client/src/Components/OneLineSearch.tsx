import React from 'react'
import { useMainContext } from '../Context'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Input from '../Components/Input';
import Button from '../Components/Button';

const OneLineSearch = () => {
  const {
    setplaceFrom,
    setPlaceTo,
    setDepartureDate,
    setReturnDate,
    getFlightsList
  } = useMainContext();

  return (
    <div>
      <Form className='mx-auto bg-light p-3 ps-5 border-top border-secondary '>
        <Row className="align-items-center">
          <Col xs="auto">
            <Form.Group >
              <Input
                lableName='From'
                type='text'
                size='sm'
                isRequired={true}
                getValueFunction={setplaceFrom}
                buttonFunction={getFlightsList} />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Form.Group >
              <Input
                lableName='To'
                type='text'
                size='sm'
                isRequired={true}
                getValueFunction={setPlaceTo}
                buttonFunction={getFlightsList} />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group >
              <Input
                lableName='Departure'
                type='text'
                size='sm'
                isRequired={false}
                getValueFunction={setDepartureDate}
                buttonFunction={getFlightsList} />
            </Form.Group>
          </Col>
          <Col xs={2}>
            <Form.Group >
              <Input
                lableName='Return'
                type='text'
                size='sm'
                isRequired={false}
                getValueFunction={setReturnDate}
                buttonFunction={getFlightsList} />
            </Form.Group>
          </Col>
          <Col xs="auto">
            <Button buttonText='🔍' buttonFunction={getFlightsList} size='sm' />
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default OneLineSearch