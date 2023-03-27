import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import PostForm from "../../PostForm";

const AccessoriesDetails = () => {
  const [selectedValue, setSelectedValue] = useState();

  const dispatch = useDispatch();

  // const selectValue = (e) => {
  //   setSelectedValue(e.target.value);
  //   dispatch(saveInput({ brand: e.target.value }));
  // };
  return (
    <>
      <PostForm>
        <div>
          <h2 className="text-md text-slate-600">Type *</h2>
          <div className="flex gap-4">
            <ButtonSelector
              onClick={selectValue}
              value="Mobile"
              content={"Mobile"}
            />
            <ButtonSelector
              onClick={selectValue}
              value="Tablets"
              content={"Tablets"}
            />
          </div>
        </div>
      </PostForm>
    </>
  );
};

export default AccessoriesDetails;
