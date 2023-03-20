import React, { useState } from "react";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import Selector from "../../../Components/styles-store/selector";
import TitleAd from "../../../Components/styles-store/TitleAd";
import PostForm from "../../PostForm";

const MobilePhoneDetails = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e, newvalue) => {
    setInputValue(newvalue);
  };
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
        <div className="p-5 border-b border-blue-500">
          <Selector
            brands={Brands}
            label={"Brand *"}
            onChange={handleChange}
            value={inputValue}
          />
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default MobilePhoneDetails;
