import React from "react";
import ButtonSelector from "./ButtonSelector";

const Transmission = () => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Transmission *</h2>
      <div className="flex gap-3">
        <ButtonSelector content={"Automatic"} />
        <ButtonSelector content={"Manual"} />
      </div>
    </div>
  );
};

export default Transmission;
