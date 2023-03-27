import React, { useState } from "react";
import { useDispatch } from "react-redux";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const CommercialVehicles = () => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  // const handleChange = (e, newvalue) => {
  //   setInputValue(newvalue);
  //   dispatch(saveInput({ type: newvalue }));
  // };
  console.log(inputValue);

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
      <PostForm>
        <div>
          <Selector
            brands={Types}
            label={"Type *"}
            onChange={handleChange}
            value={inputValue}
          />
          <YearPicker />
          <KMdriven />
        </div>
      </PostForm>
    </>
  );
};

export default CommercialVehicles;
