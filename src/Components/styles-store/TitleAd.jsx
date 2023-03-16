import React, { useState } from "react";
import InputField from "./InputField";

const TitleAd = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  console.log(inputValue);

  return (
    <div className="mt-8">
      <InputField
        type={"text"}
        label={"Ad title *"}
        helperText={
          "Mention the key features of your item (eg. brand,model,age,type)"
        }
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default TitleAd;
