import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import PostForm from "../../PostForm";

const SpareParts = () => {
  const [selectedValue, setSelectedValue] = useState();

  const dispatch = useDispatch();

  // const selectValue = (e) => {
  //   setSelectedValue(e.target.value);
  //   dispatch(saveInput({ type: e.target.value }));
  // };
  return (
    <>
      <PostForm>
        <div>
          <h2 className="text-md text-slate-600">Type</h2>
          <div className="flex gap-4">
            <ButtonSelector
              onClick={selectValue}
              value="Wheels & tyres"
              content={"Wheels & tyres"}
            />
            <ButtonSelector
              onClick={selectValue}
              value="Audio & other Accessories"
              content={"Audio & other Accessories"}
            />
            <ButtonSelector
              onClick={selectValue}
              value="Other Spare parts"
              content={"Other Spare parts"}
            />
          </div>
        </div>
      </PostForm>
    </>
  );
};

export default SpareParts;
