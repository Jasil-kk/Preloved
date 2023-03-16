import React, { useState } from "react";
import ButtonSelector from "./ButtonSelector";

const FuelSelector = () => {

  const [selectedValue, setSelectedValue] = useState({});

  const selectValue = e => {
    setSelectedValue(e.target.value)
  }
  console.log(selectedValue);

  

  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Fuel *</h2>
      <div className="flex gap-4">
        <ButtonSelector onClick={selectValue} value="CNG & Hybrids" content={"CNG & Hybrids"} />
        <ButtonSelector onClick={selectValue} value="Diesel" content={"Diesel"} />
        <ButtonSelector onClick={selectValue} value="Electric" content={"Electric"} />
        <ButtonSelector onClick={selectValue} value="LPG" content={"LPG"} />
        <ButtonSelector onClick={selectValue} value="Petrol" content={"Petrol"} />
      </div>
    </div>
  );
};

export default FuelSelector;
