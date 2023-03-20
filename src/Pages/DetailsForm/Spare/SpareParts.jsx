import React, { useState } from "react";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import TitleAd from "../../../Components/styles-store/TitleAd";
import PostForm from "../../PostForm";

const SpareParts = () => {
  const [selectedValue, setSelectedValue] = useState({});

  const selectValue = (e) => {
    setSelectedValue(e.target.value);
  };
  console.log(selectedValue);
  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
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
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default SpareParts;
