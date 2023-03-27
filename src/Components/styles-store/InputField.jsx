import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const InputField = (props) => {
  return (
    <div>
      <TextField
        autoComplete="off"
        sx={{ width: 400 }}
        type={props.type}
        id="outlined-basic"
        label={props.label}
        variant="outlined"
        helperText={props.helperText}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default InputField;
