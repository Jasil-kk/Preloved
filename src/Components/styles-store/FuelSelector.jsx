import React from "react";

import ButtonSelector from "./ButtonSelector";

const FuelSelector = ({ onChange }) => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Fuel *</h2>
      <div className="flex gap-4">
        <ButtonSelector
          onClick={onChange}
          value="CNG & Hybrids"
          content={"CNG & Hybrids"}
        />
        <ButtonSelector onClick={onChange} value="Diesel" content={"Diesel"} />
        <ButtonSelector
          onClick={onChange}
          value="Electric"
          content={"Electric"}
        />
        <ButtonSelector onClick={onChange} value="LPG" content={"LPG"} />
        <ButtonSelector onClick={onChange} value="Petrol" content={"Petrol"} />
      </div>
    </div>
  );
};

export default FuelSelector;
