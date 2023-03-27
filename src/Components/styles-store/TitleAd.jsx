import React, { useState } from "react";
import { useDispatch } from "react-redux";
import InputField from "./InputField";

const TitleAd = ({input,setInput}) => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  console.log(inputValue);


  const handleChange = (e) => {
    setInputValue(e.target.value);
    // dispatch(saveInput({title:inputValue}))
    setInput({...input,title:e.target.value})
  };

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
