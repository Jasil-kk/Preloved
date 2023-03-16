import React, { useState } from "react";
import DescriptionInput from "./DescriptionInput";

const DescriptionAd = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);
  return (
    <div className="mt-8">
      <DescriptionInput
        label={"Description *"}
        helperText={"Include condition, features and reason for selling"}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default DescriptionAd;
