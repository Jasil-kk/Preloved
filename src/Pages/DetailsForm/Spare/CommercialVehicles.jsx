import React, { useState } from "react";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import TitleAd from "../../../Components/styles-store/TitleAd";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const CommercialVehicles = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e, newvalue) => {
    setInputValue(newvalue);
  };
  console.log(inputValue);

  const Brands = [
    "Auto-rickshas & E-rickshas",
    "Buses",
    "Trucks",
    "Heavy Machinery",
    "Scrap Cars",
    "Others",
  ];

  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <Selector
            brands={Brands}
            label={"Type *"}
            onChange={handleChange}
            value={inputValue}
          />
          <YearPicker />
          <KMdriven />
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default CommercialVehicles;
