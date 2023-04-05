import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Selector = ({ brands, label, onChange, name }) => {
  const [items, setItems] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setItems(selectedValue);
    onChange(selectedValue);
  };
  console.log(items);
  return (
    <div className="mt-5">
      <FormControl sx={{ width: 400 }}>
        <InputLabel style={{ fontFamily: "poppins" }} id="demo-simple-select-label">{label}</InputLabel>
        <Select
          name={name}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={items}
          label={label}
          onChange={handleChange}
        >
          {brands.map((name) => (
            <MenuItem style={{ fontFamily: "poppins" }} key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Selector;
