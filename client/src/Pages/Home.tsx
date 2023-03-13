import React from 'react'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container>
      <Form>
        <div className="mb-3">
          <Form.Check
            inline
            label="Round-trip"
            name="round"
            type="checkbox"
            id={"round"}
          />
          <Form.Check
            inline
            label="One-way"
            name="oneWay"
            type="checkbox"
            id={"oneWay"}
          />
        </div>
        <div className="mb-3">
          <Form.Group controlId="searchDestination">
            <Row>
              <Col>
                <Form.Label>From</Form.Label>
                <Form.Control type="text" placeholder="From" required />
              </Col>
              <Col>
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="To" required />
              </Col>
            </Row>
          </Form.Group>
        </div>
        <div className="mb-3">
          <Form.Group controlId="searchTime">
            <Row>
              <Col>
                <Form.Label>Departure</Form.Label>
                <Form.Control type="text" placeholder="Departure" />
              </Col>
              <Col>
                <Form.Label>Return</Form.Label>
                <Form.Control type="text" placeholder="Return" />
              </Col>
            </Row>
          </Form.Group>
        </div>
        <div className="mb-3">
          <Form.Group controlId="searchQnt">
            <Row>
              <Col>
                <Form.Label>Adult</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Col>
              <Col>
                <Form.Label>Children</Form.Label>
                <Form.Control type="number" placeholder="0" />
              </Col>
            </Row>
          </Form.Group>
        </div>
        <Button variant="warning" type='submit'>Search</Button>
      </Form>
    </Container>
  )
}

export default Home