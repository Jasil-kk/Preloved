import React from "react";
import ButtonSelector from "./ButtonSelector";

const Owners = ({onChange}) => {
  
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">No. of Owners</h2>
      <div className="flex gap-3">
        <ButtonSelector onClick={onChange} value="1st" content={"1st"} />
        <ButtonSelector onClick={onChange} value="2nd" content={"2nd"} />
        <ButtonSelector onClick={onChange} value="3rd" content={"3rd"} />
        <ButtonSelector onClick={onChange} value="4th" content={"4th"} />
        <ButtonSelector onClick={onChange} value="4+" content={"4+"} />
      </div>
    </div>
  );
};

export default Owners;
