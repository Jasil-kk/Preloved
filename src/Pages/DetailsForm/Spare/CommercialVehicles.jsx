import React from "react";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Selector from "../../../Components/styles-store/selector";
import TitleAd from "../../../Components/styles-store/TitleAd";
import YearPicker from "../../../Components/styles-store/YearPicker";
import PostForm from "../../PostForm";

const CommercialVehicles = () => {
  const Brands = [
    { label: "Auto-rickshas & E-rickshas" },
    { label: "Buses" },
    { label: "Trucks" },
    { label: "Heavy Machinery" },
    { label: "Scrap Cars" },
    { label: "Others" },
  ];

  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <Selector brands={Brands} label={"Type *"} />
          <YearPicker />
          <KMdriven />
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default CommercialVehicles;
