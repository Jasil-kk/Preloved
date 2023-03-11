import React from "react";
import DescriptionAd from "../../../Components/styles-store/DescriptionAd";
import Selector from "../../../Components/styles-store/selector";
import TitleAd from "../../../Components/styles-store/TitleAd";
import PostForm from "../../PostForm";

const MobilePhoneDetails = () => {
  const Brands = [
    { label: "Iphone" },
    { label: "Samsung" },
    { label: "Mi" },
    { label: "Vivo" },
    { label: "Oppo" },
    { label: "Realme" },
    { label: "Asus" },
    { label: "Blackberry" },
    { label: "Infix" },
    { label: "Oneplus" },
    { label: "Nothing" },
    { label: "Nokia"},
    { label: "Google pixel"},
    { label: "Lenovo"},
    { label: "Others"},
  ];

  return (
    <>
      <PostForm>
        <div className="p-5 border-b border-blue-500">
          <Selector brands={Brands} label={"Brand *"} />
          <TitleAd/>
        <DescriptionAd />
        </div>
      </PostForm>

    </>
  );
};

export default MobilePhoneDetails;
