import React, { useState } from "react";
import PostForm from "../../PostForm";
import FuelSelector from "../../../Components/styles-store/FuelSelector";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Owners from "../../../Components/styles-store/Owners";
import Selector from "../../../Components/styles-store/selector";
import Transmission from "../../../Components/styles-store/Transmission";
import YearPicker from "../../../Components/styles-store/YearPicker";

const CarsDetails = () => {
  const [inputValue, setInputValue] = useState();

  const Brands = ["Honda", "maruti-suzuki", "Hyundai", "Tata"];

  return (
    <>
      <PostForm inputValue={inputValue}>
        <div>
          <Selector
            brands={Brands}
            label={"Brand *"}
            onChange={(items)=>setInputValue({...inputValue,brand:items})}
          />
          <YearPicker 
          onChange={(e)=>setInputValue({...inputValue,year:e.target.value})}
          />
          <FuelSelector onChange={(e)=>setInputValue({...inputValue,fuel:e.target.value})}/>
          <Transmission onChange={(e)=>setInputValue({...inputValue,transmissionType:e.target.value})}/>
          <KMdriven onChange={(e)=>setInputValue({...inputValue,kmDriven:e.target.value})}/>
          <Owners onChange={(e)=>setInputValue({...inputValue,noOfOwner:e.target.value})}/>
        </div>
      </PostForm>
    </>
  );
};

export default CarsDetails;
