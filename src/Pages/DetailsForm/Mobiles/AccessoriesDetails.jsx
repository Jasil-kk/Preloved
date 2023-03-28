import React, { useState } from "react";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import PostForm from "../../PostForm";

const AccessoriesDetails = () => {
  const [selectedValue, setSelectedValue] = useState();

  const selectValue = (e) => {
    setSelectedValue({...selectedValue, type: e.target.value });
  };
  return (
    <>
      <PostForm inputValue={selectedValue}>
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
