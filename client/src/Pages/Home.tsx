import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useMainContext } from '../Context'
import Checkbox from '../Components/Checkbox';
import Input from '../Components/Input';
import Button from '../Components/Button';

const Home = () => {
  const {
    isRound, setIsRound,
    isOneWay, setisOneWay,
    setplaceFrom,
    setPlaceTo,
    setDepartureDate,
    setReturnDate,
    setQntAdults,
    setQntChildren
  } = useMainContext();

  const anyFunction = () => { }

  return (
    <Container className='d-flex p-5 justify-content-center align-items-center'>
      <Container className='border border-success p-2 mb-2 border-opacity-25 rounded bg-light'>
        <Form>
          <div className="mb-3">
            <Checkbox
              lableName='Round-trip'
              isChecked={isRound}
              setIsChecked={setIsRound}
              setUsUnchecked={setisOneWay} />
            <Checkbox
              lableName='One-way'
              isChecked={isOneWay}
              setIsChecked={setisOneWay}
              setUsUnchecked={setIsRound} />
          </div>
          <div className="mb-3">
            <Form.Group controlId="searchDestination">
              <Row>
                <Col>
                  <Input
                    lableName='From'
                    type='text'
                    isRequired={true}
                    getValueFunction={setplaceFrom}
                    buttonFunction={anyFunction} />
                </Col>
                <Col>
                  <Input
                    lableName='To'
                    type='text'
                    isRequired={true}
                    getValueFunction={setPlaceTo}
                    buttonFunction={anyFunction} />
                </Col>
              </Row>
            </Form.Group>
          </div>
          <div className="mb-3">
            <Form.Group controlId="searchTime">
              <Row>
                <Col>
                  <Input
                    lableName='Departure'
                    type='text'
                    isRequired={false}
                    getValueFunction={setDepartureDate}
                    buttonFunction={anyFunction} />
                </Col>
                <Col>
                  <Input
                    lableName='Return'
                    type='text'
                    isRequired={false}
                    getValueFunction={setReturnDate}
                    buttonFunction={anyFunction} />
                </Col>
              </Row>
            </Form.Group>
          </div>
          <div className="mb-3">
            <Form.Group controlId="searchQnt">
              <Row>
                <Col>
                  <Input
                    lableName='Adults'
                    type='number'
                    isRequired={false}
                    getValueFunction={setQntAdults}
                    buttonFunction={anyFunction} />
                </Col>
                <Col>
                  <Input
                    lableName='Children'
                    type='number'
                    isRequired={false}
                    getValueFunction={setQntChildren}
                    buttonFunction={anyFunction} />
                </Col>
              </Row>
            </Form.Group>
          </div>
          <Button buttonText='Search' buttonFunction={anyFunction} />
        </Form>
      </Container>
    </Container>

  )
}

export default Home