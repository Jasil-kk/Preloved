import React, { useRef, useState } from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerApi } from "../Store/AuthSlice";

const RegisterPage = () => {
  const [data, setData] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerApi({ data, navigate }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      setPasswordError(true);
    } else {
      dispatch(registerApi({ data, navigate }));
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const nameRef = useRef(null);
  const mobileNoRef = useRef(null);
  const emailRef = useRef(null);

  const handleKeyDown = (event, ref) => {
    if (event.key === "Enter") {
      ref.current.focus();
    }
  };

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  return (
    <div className="w-full h-screen bg-slate-200 flex justify-center items-center font-poppins">
      <div className="bg-slate-50 min-w-min w-1/4 h-auto flex flex-col items-center p-10 gap-5 rounded-md">
        <TextField
        sx={{width:"100%"}}
          inputProps={{ style: { fontFamily: "poppins" } }}
          InputLabelProps={{ style: { fontFamily: "poppins" } }}
          id="outlined-basic"
          label="Username"
          variant="outlined"
          onChange={(e) => setData({ ...data, username: e.target.value })}
          onKeyDown={(event) => handleKeyDown(event, passwordRef)}
          inputRef={usernameRef}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel
            style={{ fontFamily: "poppins" }}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            style={{ fontFamily: "poppins" }}
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
            onChange={(e) => setData({ ...data, password: e.target.value })}
            onKeyDown={(event) => handleKeyDown(event, confirmPasswordRef)}
            inputRef={passwordRef}
          />
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel
            error={passwordError}
            style={{ fontFamily: "poppins" }}
            htmlFor="outlined-adornment-password"
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            error={passwordError}
            style={{ fontFamily: "poppins" }}
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
            onKeyDown={(event) => handleKeyDown(event, nameRef)}
            inputRef={confirmPasswordRef}
          />
          <FormHelperText
            sx={{ fontFamily: "poppins", color: "red" }}
            id="outlined-weight-helper-text"
          >
            {passwordError && "Passwords do not match"}
          </FormHelperText>
        </FormControl>
        <TextField
        sx={{width:"100%"}}
          inputProps={{ style: { fontFamily: "poppins" } }}
          InputLabelProps={{ style: { fontFamily: "poppins" } }}
          id="outlined-basic"
          label="Name"
          variant="outlined"
          onChange={(e) => setData({ ...data, name: e.target.value })}
          onKeyDown={(event) => handleKeyDown(event, mobileNoRef)}
          inputRef={nameRef}
        />
        <TextField
        sx={{width:"100%"}}
          inputProps={{ style: { fontFamily: "poppins" } }}
          InputLabelProps={{ style: { fontFamily: "poppins" } }}
          id="outlined-number"
          label="Number"
          type="number"
          onChange={(e) => setData({ ...data, mobileNo: e.target.value })}
          onKeyDown={(event) => handleKeyDown(event, emailRef)}
          inputRef={mobileNoRef}
        />
        <TextField
        sx={{width:"100%"}}
          inputProps={{ style: { fontFamily: "poppins" } }}
          InputLabelProps={{ style: { fontFamily: "poppins" } }}
          id="outlined-email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setData({ ...data, email: e.target.value })}
          inputRef={emailRef}
          onBlur={validateEmail}
          error={!!emailError}
          helperText={emailError}
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
