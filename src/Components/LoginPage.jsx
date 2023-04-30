import React, { useEffect, useRef, useState } from "react";
import { CgClose } from "react-icons/cg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleLoginApi, signInApi } from "../Store/AuthSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getPostApi } from "../Store/AdminSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { axiosApi } from "../Store/Axiosmethod";
import {FcGoogle} from "react-icons/fc"
// import { InfoToast } from "./styles-store/Toasts";

const LoginPage = ({ setShowModal, login, sell }) => {
  const [data, setData] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [google, setGoogle] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const googleAuth = () => {
		window.open(
      "http://192.168.29.54:4001/auth/google",
			"_self"
		);
	};


  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username.trim() === "" || data.password.trim() === "") {
      // Checking the username or password is empty
      setShowError(true);
    } else {
      setIsSubmitting(true);
      
      setTimeout(() => {
        dispatch(signInApi({ data, navigate, login, sell }))
          setShowModal(false);
          setIsSubmitting(false); 
      }, 1000);
    }
  };
  
  
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event, ref) => {
    if (event.key === "Enter") {
      ref.current.focus();
    }
  };
  const notify =() =>  toast.info('Login pending...', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });

  return (
    <>
      {/* <GoogleOAuthProvider clientId="92970027491-m7arhevv6ub2hgq19i6jj8q0f0ft47ub.apps.googleusercontent.com"> */}
        <div onClick={notify} className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
          <div className="w-[400px] h-auto bg-slate-50 m-5 pt-8 rounded-lg relative">
            <span
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-2xl text-slate-900 cursor-pointer"
            >
              <CgClose />
            </span>
            <form
              action=""
              className="w-full h-full flex flex-col p-4 px-6 gap-5 items-center"
            >
              <TextField
                sx={{ width: "100%" }}
                error={showError && data.username.trim() === ""}
                type="text"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                inputProps={{ style: { fontFamily: "poppins" } }}
                InputLabelProps={{ style: { fontFamily: "poppins" } }}
                FormHelperTextProps={{ style: { fontFamily: "poppins" } }}
                onChange={(e) => setData({ ...data, username: e.target.value })}
                onKeyDown={(event) => handleKeyDown(event, passwordRef)}
                inputRef={usernameRef}
                helperText={
                  showError && data.username.trim() === ""
                    ? "Username can't be empty"
                    : ""
                }
              />
              <FormControl
                sx={{ width: "100%" }}
                variant="outlined"
                error={showError && data.password.trim() === ""}
              >
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
                  I
                  label="Password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  onKeyDown={(event) =>
                    handleKeyDown(event, confirmPasswordRef)
                  }
                  inputRef={passwordRef}
                />
                <FormHelperText
                  sx={{ fontFamily: "poppins" }}
                  id="outlined-weight-helper-text"
                >
                  {" "}
                  {showError && data.password.trim() === ""
                    ? "Password can't be empty"
                    : ""}{" "}
                </FormHelperText>
              </FormControl>
              <Link to={"/forgetpassword"}>
                <p className="ml-56 text-sm text-slate-600 cursor-pointer">
                  forgot password
                </p>
              </Link>
              <div onClick={googleAuth} className="w-auto px-5 h-10 flex items-center justify-around gap-5 border border-slate-400 rounded bg-transparent text-slate-700 text-lg"><span className="text-2xl"><FcGoogle/></span>Sign in with Google</div>
              {/* <GoogleLogin
                width="300"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  setGoogle(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              /> */}
              <Link
                to={"/register"}
                className="text-sm text-slate-600 font-poppins"
              >
          
                <span className="text-base text-blue-500 mr-1">Register</span>
                a new account
              </Link>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-52 h-10 sm:h-12 bg-blue-500 rounded-lg text-xl text-white font-poppins hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
        <div className="w-full h-full opacity-50 fixed inset-0 z-40 bg-black"></div>
      {/* </GoogleOAuthProvider> */}
      {/* {isSubmitting && (
      <div className="absolute top-10 right-10 z-50 w-80 h-auto">
      <InfoToast content={"Login Pending..."}/>
      </div>
      )} */}
       {/* <ToastContainer /> */}
    </>
  );
};

export default LoginPage;
