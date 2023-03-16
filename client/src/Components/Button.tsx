import React from 'react'
import ButtonBootstrap from 'react-bootstrap/Button';

interface IPropsButtons {
  buttonText: string,
  size?: "sm" | "lg" | undefined,
  buttonFunction: () => void,
}

const Button = ({ buttonText, buttonFunction, size }: IPropsButtons) => {
  return (
    <ButtonBootstrap
      variant="warning"
      type='submit'
      size={size}
      onClick={(e)=> { console.log('foi'); e.preventDefault() ; buttonFunction()}}>
      {buttonText}
    </ButtonBootstrap>
  )
}

export default Button