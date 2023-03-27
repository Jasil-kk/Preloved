import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Selector from "../../../Components/styles-store/selector";
import PostForm from "../../PostForm";

const MobilePhoneDetails = () => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  // const handleChange = (e, newvalue) => {
  //   setInputValue(newvalue);
  //   dispatch(saveInput({brand:newvalue}))
  // };
  console.log(inputValue);

  const Brands = [
    "Iphone",
    "Samsung",
    "Mi",
    "Vivo",
    "Oppo",
    "Realme",
    "Asus",
    "Blackberry",
    "Infix",
    "Oneplus",
    "Nothing",
    "Nokia",
    "Google pixel",
    "Lenovo",
    "Others",
  ];

  return (
    <>
      <PostForm>
        <div>
          <Selector
            brands={Brands}
            label={"Brand *"}
            onChange={handleChange}
            value={inputValue}
          />
        </div>
      </PostForm>
    </>
  );
};

export default MobilePhoneDetails;
