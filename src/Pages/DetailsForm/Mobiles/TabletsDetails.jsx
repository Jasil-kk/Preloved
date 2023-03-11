import React from "react";
import ButtonSelector from "../../../Components/styles-store/ButtonSelector";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import TitleAd from "../../../Components/styles-store/TitleAd";
import PostForm from "../../PostForm";

const TabletsDetails = () => {
  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <h2 className="text-md text-slate-600">Fuel *</h2>
          <div className="flex gap-4">
            <ButtonSelector content={"iPads"} />
            <ButtonSelector content={"Samsung"} />
            <ButtonSelector content={"Other Tablets"} />
          </div>
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default TabletsDetails;