import React from "react";
import { CgClose } from "react-icons/cg";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginPage = ({ setShowModal }) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
        <div className="w-96 h-auto bg-slate-50 m-5 pt-8 rounded-lg relative">
          <span
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 text-2xl text-slate-900 cursor-pointer"
          >
            <CgClose />
          </span>
          <form
            action=""
            className="w-full h-full flex flex-col p-4 gap-5 items-center"
          >
            <TextField
              type="text"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className="w-full h-10 sm:h-12 text-xl pl-4 font-poppins"
            />
            <FormControl  variant="outlined" className="w-full h-10 sm:h-12 text-xl pl-4 font-poppins">
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
              />
            </FormControl>
            <button
              type="submit"
              className="w-52 h-10 sm:h-12 bg-blue-500 rounded-lg text-xl text-white font-poppins hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LoginPage;
