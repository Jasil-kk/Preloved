import React from "react";
import ButtonSelector from "./ButtonSelector";

const Owners = () => {
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">No. of Owners</h2>
      <div className="flex gap-3">
        <ButtonSelector content={"1st"} />
        <ButtonSelector content={"2nd"} />
        <ButtonSelector content={"3rd"} />
        <ButtonSelector content={"4th"} />
        <ButtonSelector content={"4+"} />
      </div>
    </div>
  );
};

export default Owners;
