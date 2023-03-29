import React, { useState } from "react";
import IconInput from "../../Components/styles-store/IconInput";

const SetPrice = ({input,setInput}) => {
  const [inputValue, setInputValue] = useState("");


  const handleChange = (e) => {
    const priceValue = e.target.value;
    setInputValue(priceValue);
    setInput({...input,price:e.target.value});
  };
  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800">SET A PRICE</h2>
      <IconInput
        inputLabel={"Amount"}
        startAdornment={"₹"}
        label={"Amount"}
        type={"number"}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default SetPrice;
