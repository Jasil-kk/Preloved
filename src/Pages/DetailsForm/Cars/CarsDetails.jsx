import React from "react";
import PostForm from "../../PostForm";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import FuelSelector from "../../../Components/styles-store/FuelSelector";
import KMdriven from "../../../Components/styles-store/KMdriven";
import Owners from "../../../Components/styles-store/Owners";
import Selector from "../../../Components/styles-store/selector";
import TitleAd from "../../../Components/styles-store/TitleAd";
import Transmission from "../../../Components/styles-store/Transmission";
import YearPicker from "../../../Components/styles-store/YearPicker";

const CarsDetails = () => {
  const Brands = [
    { label: "Honda" },
    { label: "maruti-suzuki" },
    { label: "Hyundai" },
    { label: "Tata" },
  ];

  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <Selector brands={Brands} label={"Brand *"} value={"jasil"}/>
          <YearPicker />
          <FuelSelector />
          <Transmission />
          <KMdriven />
          <Owners />
          <TitleAd />
          <DescriptionAd />
        </div>
      </PostForm>
    </>
  );
};

export default CarsDetails;
