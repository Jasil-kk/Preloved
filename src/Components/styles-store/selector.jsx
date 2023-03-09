import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Selector = () => {
  const Brands = [
    { label: "Honda"},
    { label: "maruti-suzuki"},
    { label: "Hyundai"},
    { label: "Tata"},
  ];

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={Brands}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Brand *" />}
      />
    </div>
  );
};

export default Selector;
