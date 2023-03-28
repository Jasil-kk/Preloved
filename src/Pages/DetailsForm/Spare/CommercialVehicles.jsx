import React, { useState } from "react";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const CommercialVehicles = () => {
  const [inputValue, setInputValue] = useState();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, type: e });
  };

  const Types = [
    "Auto-rickshas & E-rickshas",
    "Buses",
    "Trucks",
    "Heavy Machinery",
    "Scrap Cars",
    "Others",
  ];

  return (
    <>
      <PostForm inputValue={inputValue}>
        <div>
          <Selector
            brands={Types}
            label={"Type *"}
            onChange={handleChange}
            value={inputValue}
          />
          <YearPicker onChange={(e)=>setInputValue({...inputValue,year:e.target.value})}/>
          <KMdriven onChange={(e)=>setInputValue({...inputValue,kmDriven:e.target.value})}/>
        </div>
      </PostForm>
    </>
  );
};

export default CommercialVehicles;
