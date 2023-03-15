import React, { useState } from "react";
import IconInput from "../Components/styles-store/IconInput";
import InputField from "../Components/styles-store/InputField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import BackNav from "../Components/BackNav";

const EditProfile = () => {
  const [imageSrc, setImageSrc] = useState("");

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
  };

  return (
    <>
    <BackNav />
    <div className="w-full h-auto py-10 bg-slate-200 flex justify-center items-center">
      <div className="w-1/3 h-auto bg-slate-50 border border-slate-400">
        <div className="p-3 border-b border-slate-400">
          <h1 className="text-2xl font-semibold">Edit Profile</h1>
        </div>
        <div className="p-5 border-b border-slate-400">
          <div className="w-60 h-60 flex justify-center items-center border-4 border-slate-400 rounded-full overflow-hidden relative">
            <div className="absolute bottom-0">
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

          <h2 className="mt-7 text-lg font-semibold">Basic information</h2>
          <div className="mt-7">
            <InputField label={"Name"} />
          </div>
          <div className="mt-7">
            <InputField label={"About me (optional)"} />
          </div>
        </div>
        <div className="p-5 border-b border-slate-400">
          <IconInput
            inputLabel={"Phone Number"}
            type={"number"}
            label={"Phone Number"}
            startAdornment={"+91"}
          />
          <div className="mt-5">
            <InputField label={"Email"} type={"email"} />
          </div>
        </div>
        <div className="p-6 flex justify-between">
          <button className="h-10 px-4 bg-slate-700 text-slate-50 text-lg rounded-md">
            Discard
          </button>
          <button className="h-10 px-4 bg-green-700 text-slate-50 text-lg rounded-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default EditProfile;
