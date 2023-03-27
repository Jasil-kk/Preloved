import React, { useState } from "react";
import { useDispatch } from "react-redux";
import DescriptionInput from "./DescriptionInput";

const DescriptionAd = ({input,setInput}) => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputValue(e.target.value);
    // dispatch(saveInput({description:inputValue}))
    setInput({...input,description:e.target.value})
  };
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
