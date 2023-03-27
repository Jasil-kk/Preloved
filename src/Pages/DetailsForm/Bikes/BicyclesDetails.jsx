import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import PostForm from "../../PostForm";

const BicyclesDetails = () => {
const [selectedValue, setSelectedValue] = useState();

const dispatch = useDispatch();

// const selecterValue = (e) => {
//   setSelectedValue(e.target.value);
//   dispatch(saveInput({ brand: e.target.value }));
// };

  return (
    <>
      <PostForm>
        <div>
          <h2 className="text-md text-slate-600">Brand *</h2>
          <div className="flex gap-4">
            <ButtonSelector onClick={selecterValue} value="Hercules" content={"Hercules"} />
            <ButtonSelector onClick={selecterValue} value="Hero" content={"Hero"} />
            <ButtonSelector onClick={selecterValue} value="Other Brands" content={"Other Brands"} />
          </div>
        </div>
      </PostForm>
    </>
  );
};

export default BicyclesDetails;
