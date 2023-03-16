import React from "react";
import { TextField, Autocomplete } from "@mui/material";

const Selector = ({brands,label,value,onChange}) => {


  return (
    <div className="mt-5">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={brands}
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label={label}/>}
        value={value}
        onChange={onChange}
        freeSolo
      />
    </div>
  );
};

export default Selector;
