import React from "react";
import InputField from "./InputField";

const KMdriven = ({onChange}) => {

  return (
    <div className="mt-8">
      <InputField
        type={"number"}
        label={"KM driven *"}
        onChange={onChange}
      />
    </div>
  );
};

export default KMdriven;
