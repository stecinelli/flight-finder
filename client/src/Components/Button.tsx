import React from 'react'
import ButtonBootstrap from 'react-bootstrap/Button';

interface IPropsButtons {
  buttonText: string,
  buttonFunction: () => void,
}

const Button = ({ buttonText, buttonFunction }: IPropsButtons) => {
  return (
    <ButtonBootstrap
      variant="warning"
      type='submit'
      onClick={buttonFunction}>
      {buttonText}
    </ButtonBootstrap>
  )
}

export default Button