import React, { useRef, useState } from "react";
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
import { signInApi } from "../Store/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getPostApi } from "../Store/AdminSlice";

const LoginPage = ({ setShowModal, login, sell }) => {
  // const [data, setData] = useState();
  const [data, setData] = useState({ username: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showError, setShowError] = useState(false);
  const [google, setGoogle] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pageLimit = 10 ;
  const page = 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.username.trim() === "" || data.password.trim() === "") {
      // Checking the username or password is empty
      setShowError(true);
    } else {
      dispatch(signInApi({ data, navigate, login, sell })).then(()=>{
        dispatch(getPostApi({page, pageLimit}))
      });
      setShowModal(false);
    }
  };
  const [showPassword, setShowPassword] = React.useState(false);

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

console.log(google?.clientId);
  return (
    <>
      <GoogleOAuthProvider clientId="92970027491-m7arhevv6ub2hgq19i6jj8q0f0ft47ub.apps.googleusercontent.com">
        <div className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
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
              sx={{width:"100%"}}
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
              <GoogleLogin
                width="300"
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse);
                  setGoogle(credentialResponse);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
              />
              <Link
                to={"/register"}
                className="text-sm text-slate-600 font-poppins"
              >
                No account ?
                <span className="text-lg text-blue-500 ml-1">register</span>
              </Link>
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-52 h-10 sm:h-12 bg-blue-500 rounded-lg text-xl text-white font-poppins hover:bg-blue-600"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
      </GoogleOAuthProvider>
    </>
  );
};

export default LoginPage;
