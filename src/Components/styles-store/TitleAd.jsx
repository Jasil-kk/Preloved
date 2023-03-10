import React from "react";
import InputField from "./InputField";

const TitleAd = () => {
  return (
    <div className="mt-8">
      <InputField type={"text"} label={"Ad title *"} helperText={"Mention the key features of your item (eg. brand,model,age,type)"}/>
    </div>
  );
};

export default TitleAd;
