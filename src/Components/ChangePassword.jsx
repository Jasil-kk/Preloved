import React from "react";
import TextField from "@mui/material/TextField";

const ChangePassword = () => {
  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center font-poppins">
      <div className="w-[450px] h-auto bg-slate-50 p-5 flex flex-col justify-center items-center rounded-md">
        <h1 className="text-3xl font-semibold text-slate-900">
          Change your password 
        </h1>
        <h5 className="text-sm text-slate-500 mt-2 mb-6">
          Please enter your new Password.
        </h5>
        <TextField
          className="w-full"
          id="outlined-basic"
          type={"number"}
          label="New Password"
          variant="outlined"
        />
         <TextField
          className="w-full"
          id="outlined-basic"
          type={"number"}
          label="Confirm New Password"
          variant="outlined"
        />
        <button className="mt-3 w-auto px-4 h-10 rounded-3xl bg-blue-500 text-slate-50 transform transition duration-500 ease-in-out hover:scale-105">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
