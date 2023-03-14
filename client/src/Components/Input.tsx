import React from 'react'
import Form from 'react-bootstrap/Form';

interface IPropsInput {
  lableName: string,
  type: string,
  isRequired: boolean,
  buttonFunction: () => void,
  getValueFunction: (s: any) => void,
}

const Input = ({ lableName, isRequired, getValueFunction, buttonFunction, type }: IPropsInput) => {

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.currentTarget.value;
    getValueFunction(value);
  }

  return (
    <>
      <Form.Label>{lableName}</Form.Label>
      <Form.Control
        type={type}
        placeholder={type === 'number' ?'0' :lableName}
        required={isRequired}
        onKeyDown={e => {
          if (e.key.toLowerCase() === 'enter') {
            e.preventDefault();
            buttonFunction();
          }
        }}
        onChange={getValue} />
    </>
  )
}

export default Input