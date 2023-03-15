import React from 'react'
import { useMainContext } from '../Context'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '../Components/Checkbox';
import Input from '../Components/Input';
import Button from '../Components/Button';
import OneLineSearch from '../Components/OneLineSearch';


const SearchResult = () => {
  const {
    isRound, setIsRound,
    isOneWay, setisOneWay,
    setplaceFrom,
    setPlaceTo,
    setDepartureDate,
    setReturnDate,
    setQntAdults,
    setQntChildren,
    getFlightsList
  } = useMainContext();

  return (
    <>
      <OneLineSearch/>

      <Container>
        
      </Container>
    </>
  )
}

export default SearchResult