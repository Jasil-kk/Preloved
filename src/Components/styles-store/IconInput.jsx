import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const IconInput = (props) => {
  return (
    <div>
      <FormControl fullWidth sx={{mt : 2 , width: 400 }}>
        <InputLabel htmlFor="outlined-adornment-amount">
          {props.inputLabel}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              {props.startAdornment}
            </InputAdornment>
          }
          label={props.label}
          type={props.type}
        />
      </FormControl>
    </div>
  );
};

export default IconInput;
