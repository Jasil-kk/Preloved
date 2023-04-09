import React, { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const PhotoBox = ({setInputValue}) => {
  const [imageSrc, setImageSrc] = useState();
  const [selectedFile, setSelectedFile] = useState("");


//   const handleFileSelection = (e) => {
//     const file = e.target.files[0];
//     setImageSrc(URL.createObjectURL(file))
//     setSelectedFile(e.target.files[0]);
//     // const formData = new FormData()
//     // formData.append('photos',imageSrc,imageSrc.name)
// setInputValue(e.target.files[0]);
//   };

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
    setSelectedFile(e.target.files[0]);
    const formData = new FormData();
    formData.append("image", e.target.files[0], e.target.files[0].name);
    setInputValue(formData);
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
              // multiple
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
