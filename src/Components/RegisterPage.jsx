import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../Store/AuthSlice";

const RegisterPage = () => {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerApi({ data, navigate }));
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center font-poppins">
      <div className="bg-slate-50 min-w-min w-1/4 h-auto flex flex-col p-10 gap-5 rounded-md">
        <TextField
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setData({ ...data, username: e.target.value })}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e) =>
                setData({ ...data, password: e.target.value })
              }
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            ConfirmPassword
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="ConfirmPassword"
            onChange={(e) =>
                setData({ ...data, confirmPassword: e.target.value })
              }
          />
        </FormControl>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          onChange={(e) => setData({ ...data, mobileNo: e.target.value })}
        />
        <TextField
          id="outlined-email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="w-96 h-11 bg-blue-500 text-slate-50 text-lg rounded-md drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;
