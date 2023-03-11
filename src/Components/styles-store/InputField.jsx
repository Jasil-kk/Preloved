import React from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <div>
      <TextField 
        sx={{ width: 400 }}
        type={props.type}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        helperText={props.helperText}
      />
    </div>
  );
};

export default InputField;
