import React from "react";
import TextField from "@mui/material/TextField";

const TitleAd = () => {
  return (
    <div className="mt-8">
      <TextField
        sx={{ width: 400 }}
        id="outlined-basic"
        label="Ad title *"
        variant="outlined"
        helperText="Mention the key features of your item (eg. brand,model,age,type)"
      />
    </div>
  );
};

export default TitleAd;
