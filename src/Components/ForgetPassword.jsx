import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { forgetPasswordApi } from "../Store/AuthSlice";

const ForgetPassword = () => {
    const [input, setInput] = useState();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgetPasswordApi(input))
    }

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center font-poppins">
      <div className="w-[450px] h-auto bg-slate-50 p-5 flex flex-col justify-center items-center rounded-md">
        <h1 className="text-3xl font-semibold text-slate-900">
          Forgot your password ?
        </h1>
        <h5 className="text-sm text-slate-500 mt-2 mb-6">
          Please enter your registered email address.
        </h5>
        <TextField
          className="w-full"
          id="outlined-basic"
          type="email"
          label="Email"
          variant="outlined"
          onChange={(e)=> setInput({...input, email: e.target.value})}
        />
        <button onClick={handleSubmit} className="mt-3 w-auto px-4 h-10 rounded-3xl bg-blue-500 text-slate-50 transform transition duration-500 ease-in-out hover:scale-105">
          Reset Password
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
