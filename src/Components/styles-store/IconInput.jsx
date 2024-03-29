import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const IconInput = ({inputLabel,label,type,value,onChange,startAdornment,defaultValue}) => {
  return (
    <div>
      <FormControl fullWidth sx={{mt : 2 , width: 400 }} >
        <InputLabel sx={{ fontFamily: "poppins" }} htmlFor="outlined-adornment-amount">
          {inputLabel}
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={
            <InputAdornment position="start">
              {startAdornment}
            </InputAdornment>
          }
          label={label}
          type={type}
          value={value}
          onChange={onChange}
          defaultValue={defaultValue}
          inputProps={{ style: { fontFamily: "poppins" } }}
        />
      </FormControl>
    </div>
  );
};

export default IconInput;
