import React, { useState } from "react";
import InputField from "./InputField";

const YearPicker = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  return (
    <div className="mt-8">
      <InputField
        type={"number"}
        label={"Year *"}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default YearPicker;
