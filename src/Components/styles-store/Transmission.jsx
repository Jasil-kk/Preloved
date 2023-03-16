import React, { useState } from "react";
import ButtonSelector from "./ButtonSelector";

const Transmission = () => {

  const [selectedValue, setSelectedValue] = useState({});

  const selectValue = e => {
    setSelectedValue(e.target.value)
  }
  console.log(selectedValue);

  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Transmission *</h2>
      <div className="flex gap-3">
        <ButtonSelector onClick={selectValue} value="Automatic" content={"Automatic"} />
        <ButtonSelector onClick={selectValue} value="Manual" content={"Manual"} />
      </div>
    </div>
  );
};

export default Transmission;
