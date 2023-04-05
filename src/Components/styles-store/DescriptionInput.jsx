import React from "react";
import TextField from "@mui/material/TextField";

const DescriptionInput = ({label,helperText,onChange,value}) => {
  return (
    <div>
      <TextField
        autoComplete="off"
        id="outlined-multiline-static"
        label={label}
        multiline
        rows={4}
        sx={{ width: 400 }}
        helperText={helperText}
        value={value}
        onChange={onChange}
        inputProps={{ style: { fontFamily: "poppins" } }}
        InputLabelProps={{ style: { fontFamily: "poppins" } }}
      />
    </div>
  );
};

export default DescriptionInput;
