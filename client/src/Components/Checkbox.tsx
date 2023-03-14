import React from 'react'
import Form from 'react-bootstrap/Form';

interface IPropsCheckbox {
  lableName: string,
  isChecked: boolean,
  setIsChecked: (a: boolean) => void,
  setUsUnchecked: (a: boolean) => void,
}

const Checkbox = ({ lableName, isChecked, setIsChecked, setUsUnchecked }: IPropsCheckbox) => {

  const handleToogle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setIsChecked(value)
    setUsUnchecked(!value)
  }

  return (
    <Form.Check
      inline
      type="checkbox"
      label="Round-trip"
      name="round"
      id={"round"}
      checked={isChecked}
      onChange={(e)=> handleToogle(e) }
    />
  )
}

export default Checkbox