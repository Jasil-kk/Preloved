import React from "react";
import TextField from "@mui/material/TextField";

const InputField = ({
  type,
  label,
  helperText,
  onChange,
  value,
  defaultValue,
}) => {
  return (
    <div>
      <TextField
        autoComplete="off"
        sx={{ width: 400 }}
        type={type}
        id="outlined-basic"
        label={label}
        variant="outlined"
        helperText={helperText}
        onChange={onChange}
        value={value}
        defaultValue={defaultValue}
        inputProps={{ style: { fontFamily: "poppins" } }}
        InputLabelProps={{ style: { fontFamily: "poppins" } }}
      />
    </div>
  );
};

export default InputField;
