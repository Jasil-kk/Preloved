import React, { useState } from "react";
import Selector from "../../../Components/styles-store/selector";
import PostForm from "../../PostForm";

const MobilePhoneDetails = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, brand: e });
  };

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
      <PostForm inputValue={inputValue}>
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
