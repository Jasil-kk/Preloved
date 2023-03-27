import React from "react";

import ButtonSelector from "./ButtonSelector";

const Transmission = ({ onChange }) => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">Transmission *</h2>
      <div className="flex gap-3">
        <ButtonSelector
          onClick={onChange}
          value="Automatic"
          content={"Automatic"}
        />
        <ButtonSelector onClick={onChange} value="Manual" content={"Manual"} />
      </div>
    </div>
  );
};

export default Transmission;
