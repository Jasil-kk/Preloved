import React from "react";
import IconInput from "../../Components/styles-store/IconInput";

const SetPrice = () => {
  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800">SET A PRICE</h2>
      <IconInput
        inputLabel={"Amount"}
        startAdornment={"₹"}
        label={"Amount"}
        type={"number"}
      />
    </div>
  );
};

export default SetPrice;
