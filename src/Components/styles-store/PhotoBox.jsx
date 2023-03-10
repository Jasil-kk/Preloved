import React from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const PhotoBox = () => {
  return (
    <div>
      <div className="w-14 h-14 flex justify-center items-center border border-slate-500">
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
        >
          <input hidden accept="image/*" type="file" />
          <PhotoCamera />
        </IconButton>
      </div>
    </div>
  );
};

export default PhotoBox;
