import React, { useState } from "react";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const MotorCycleDetails = () => {
  const [inputValue, setInputValue] = useState();

  // const dispatch = useDispatch();
  // const handleChange = () => {
  //   dispatch(saveInput({details:inputValue}));
  // };

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
      <PostForm>
        <div>
          <Selector
            brands={Brands}
            label={"Brand *"}
            onChange={(items)=>setInputValue({...inputValue,brand:items})}
          />
          <YearPicker />
          <KMdriven />
        </div>
      </PostForm>
    </>
  );
};

export default MotorCycleDetails;
