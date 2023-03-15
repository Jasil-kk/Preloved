import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Selector = (props) => {

// const []

  return (
    <div className="mt-5">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={props.brands}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label={props.label}/>}
        value={props.value}
        onChange={(e) => e.target.value}
      />
    </div>
  );
};

export default Selector;
