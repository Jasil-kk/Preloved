import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import PostForm from "../../PostForm";

const TabletsDetails = () => {
  const [selectedValue, setSelectedValue] = useState();

  const dispatch = useDispatch();

  // const selectValue = (e) => {
  //   setSelectedValue(e.target.value);
  //   dispatch(saveInput({type:e.target.value}))
  // };
  return (
    <>
      <PostForm>
        <div>
          <h2 className="text-md text-slate-600">Type *</h2>
          <div className="flex gap-4">
            <ButtonSelector
              onClick={selectValue}
              value="iPads"
              content={"iPads"}
            />
            <ButtonSelector
              onClick={selectValue}
              value="Samsung"
              content={"Samsung"}
            />
            <ButtonSelector
              onClick={selectValue}
              value="Other Tablets"
              content={"Other Tablets"}
            />
          </div>
        </div>
      </PostForm>
    </>
  );
};

export default TabletsDetails;
