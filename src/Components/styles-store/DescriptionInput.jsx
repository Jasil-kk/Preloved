import React from "react";
import TextField from "@mui/material/TextField";

const DescriptionInput = (props) => {
  return (
    <div>
      <TextField
        autoComplete="off"
        id="outlined-multiline-static"
        label={props.label}
        multiline
        rows={4}
        sx={{ width: 400 }}
        helperText={props.helperText}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

export default DescriptionInput;
