import React, { useState } from "react";
import ButtonSelector from "./ButtonSelector";

const Owners = () => {
  const [selectedValue, setSelectedValue] = useState({});

  const selectValue = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);
  return (
    <div className="mt-8 font-poppins">
      <h2 className="text-md text-slate-600">No. of Owners</h2>
      <div className="flex gap-3">
        <ButtonSelector onClick={selectValue} value="1st" content={"1st"} />
        <ButtonSelector onClick={selectValue} value="2nd" content={"2nd"} />
        <ButtonSelector onClick={selectValue} value="3rd" content={"3rd"} />
        <ButtonSelector onClick={selectValue} value="4th" content={"4th"} />
        <ButtonSelector onClick={selectValue} value="4+" content={"4+"} />
      </div>
    </div>
  );
};

export default Owners;
