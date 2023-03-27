import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "./InputField";

const YearPicker = ({onChange}) => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  //   dispatch(saveInput(inputValue ));
  // };

  return (
    <div className="mt-8">
      <InputField
        type={"number"}
        label={"Year *"}
        value={inputValue}
        onChange={onChange}
      />
    </div>
  );
};

export default YearPicker;
