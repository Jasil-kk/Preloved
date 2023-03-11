import React, { useState } from "react";
import IconInput from "../../Components/styles-store/IconInput";
import InputField from "../../Components/styles-store/InputField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

const ReviewDetails = () => {
  const [imageSrc, setImageSrc] = useState("");

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  };

  return (
    <div className="p-5 border-b border-blue-500">
      <h2 className="text-2xl font-semibold text-slate-800 ">
        REVIEW YOUR DETAILS
      </h2>
      <div className="mt-5">
        <div className="flex items-center gap-8">
          <div className="w-24 h-24 border border-slate-500 rounded-full flex justify-center overflow-hidden relative">
            <div className="absolute bottom-0 ">
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ bgcolor: "yellow", width: 75, height: 30 }}
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
            {imageSrc && <img className="" src={imageSrc} alt="Selected" />}
          </div>
          <InputField type={"text"} label={"Name"} />
        </div>
        <h3 className="text-xl mt-8 font-semibold">
          Let's verify your account
        </h3>
        <p className="text-sm my-3">
          We will send you a confirmation code by sms on the next step.
        </p>
        <IconInput
          inputLabel={"Mobile Phone Number"}
          startAdornment={"+91"}
          label={"Mobile Phone Number"}
          type={"number"}
        />
      </div>
    </div>
  );
};

export default ReviewDetails;
