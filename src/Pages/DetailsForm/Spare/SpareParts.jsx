import React from "react";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import TitleAd from "../../../Components/styles-store/TitleAd";
import PostForm from "../../PostForm";

const SpareParts = () => {
  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <h2 className="text-md text-slate-600">Type</h2>
          <div className="flex gap-4">
            <ButtonSelector content={"Wheels & tyres"} />
            <ButtonSelector content={"Audio & other Accessories"} />
            <ButtonSelector content={"Other Spare parts"} />
          </div>
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default SpareParts;
