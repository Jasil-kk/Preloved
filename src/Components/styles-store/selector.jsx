import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Selector = (props) => {
  return (
    <div className="mt-5">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.brands}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label={props.label}/>}
      />
    </div>
  );
};

export default Selector;
