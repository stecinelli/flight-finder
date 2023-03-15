import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const Navegation = () => {
  return (
    <Navbar bg="light" variant="light">
      <Container className='container-xxl'>
        <Navbar.Brand href="/">FLIGHT-FINDER</Navbar.Brand>
        <Nav className='justify-content-end' activeKey='/'>
          <Nav.Item>
            <Nav.Link href='/'>Flights</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href='bookings'>My Bookings</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navegation