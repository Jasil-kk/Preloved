import React, { useState } from 'react'
import InputField from './InputField';


const KMdriven = () => {
  const [inputValue, setInputValue] = useState({});

const handleChange = (e) => {
  setInputValue(e.target.value);
}
console.log(inputValue);
  return (
    <div className='mt-8'>
        <InputField type={"number"} label={"KM driven *"} value={inputValue} onChange={handleChange}/>
    </div>
  )
}

export default KMdriven