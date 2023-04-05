import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const PhotoBox = ({setInputValue}) => {
  const [imageSrc, setImageSrc] = useState();

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
    setInputValue(file);
    e.forEach((file,key)=>{
      const reader = new FileReader()
      reader.onload = async ()=>{
        if(reader.readyState === 2){
          setInputValue(reader.result)
        }
      }
      reader.readAsDataURL(file)
    })
  };


  return (
    <div>
      <div className="w-20 h-20 flex justify-center items-center overflow-hidden border border-slate-500 relative">
        <div className="absolute">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
          >
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleFileSelection}
            />
            <PhotoCamera />
          </IconButton>
        </div>
        {imageSrc && <img src={imageSrc} alt="Selected" />}
      </div>
    </div>
  );
};

export default PhotoBox;
