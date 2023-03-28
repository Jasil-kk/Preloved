import React, { useState } from "react";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const MotorCycleDetails = () => {
  const [inputValue, setInputValue] = useState();

  const Brands = [
    "Hero Honda",
    "Bajaj",
    "Hero",
    "Honda",
    "KTM",
    "Royal Enfield",
    "Suzuki",
    "TVS",
    "Yamaha",
    "Other Brands",
  ];

  return (
    <>
      <PostForm inputValue={inputValue}>
        <div>
          <Selector
            brands={Brands}
            label={"Brand *"}
            onChange={(items)=>setInputValue({...inputValue,brand:items})}
          />
          <YearPicker onChange={(e)=>setInputValue({...inputValue,year:e.target.value})}/>
          <KMdriven onChange={(e)=>setInputValue({...inputValue,kmDriven:e.target.value})}/>
        </div>
      </PostForm>
    </>
  );
};

export default MotorCycleDetails;
