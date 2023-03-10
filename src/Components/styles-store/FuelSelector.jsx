import React from "react";
import ButtonSelector from "./ButtonSelector";

const FuelSelector = () => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Fuel *</h2>
      <div className="flex gap-4">
        <ButtonSelector content={"CNG & Hybrids"} />
        <ButtonSelector content={"Diesel"} />
        <ButtonSelector content={"Electric"} />
        <ButtonSelector content={"LPG"} />
        <ButtonSelector content={"Petrol"} />
      </div>
    </div>
  );
};

export default FuelSelector;
