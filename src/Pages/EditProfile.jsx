import React, { useEffect, useState } from "react";
import IconInput from "../Components/styles-store/IconInput";
import InputField from "../Components/styles-store/InputField";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import BackNav from "../Components/BackNav";
import { useDispatch, useSelector } from "react-redux";
import {
  profileDeleteApi,
  profileUpdateApi,
  userProfileApi,
} from "../Store/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "3px solid 	#8B8000",
  boxShadow: 24,
  p: 2,
  pb: 1,
  textAlign: "center",
};

const EditProfile = () => {
  const [inputValue, setInputValue] = useState();
  const [imageSrc, setImageSrc] = useState("");
  const [open, setOpen] = useState(false);

const {profile} = useSelector((state)=> state.auth)
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  dispatch(userProfileApi());
}, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(profileUpdateApi({ inputValue, navigate }));
  };

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc( URL.createObjectURL(file))
  };

  const handleDelete = () => {
    dispatch(profileDeleteApi({ token, navigate }));
  };
  return (
    <>
      <BackNav />
      <div className="w-full h-auto py-10 bg-slate-200 flex justify-center items-center">
        <div className="w-1/3 h-auto bg-slate-50 border border-slate-400">
          <div className="flex justify-between p-3 border-b border-slate-400">
            <h1 className="text-2xl font-semibold">Edit Profile</h1>
            <button
              onClick={handleOpen}
              className=" w-auto h-10 px-3 text-lg text-red-500 rounded-md hover:border border-red-200"
            >
              Delete Profile
            </button>
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
              {imageSrc ? (<img src={imageSrc} alt="Selected" /> ): 
              <img src={profile?.photos[0]?.url} alt="" /> }
              
            </div>

            <h2 className="mt-7 text-lg font-semibold">Basic information</h2>
            <div className="mt-7">
              <InputField
                label={"Name"}
                defaultValue={profile?.name}
                onChange={(e) =>
                  setInputValue({ ...inputValue, name: e.target.value })
                }
              />
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
              defaultValue={profile?.mobileNo}
              onChange={(e) =>
                setInputValue({ ...inputValue, mobileNo: e.target.value })
              }
            />
            <div className="mt-5">
              <InputField
                label={"Email"}
                type={"email"}
                defaultValue={profile?.email}
                onChange={(e) =>
                  setInputValue({ ...inputValue, email: e.target.value })
                }
              />
            </div>
          </div>
          <div className="p-6 flex justify-between">
            <Link to={"/"}>
              <button className="h-10 px-4 bg-slate-700 text-slate-50 text-lg rounded-md">
                Cancel
              </button>
            </Link>
            <button
              onClick={handleUpdate}
              className="h-10 px-4 bg-green-700 text-slate-50 text-lg rounded-md"
            >
              Save Changes
            </button>
          </div>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 1, fontSize: 18, fontFamily: "poppins" }}
            >
              Do you really want to delete your account
            </Typography>
            <div className="flex justify-between">
              <button
                onClick={handleClose}
                className="font-poppins mt-3 w-auto h-7 px-2 rounded-md bg-transparent text-blue-500 hover:border border-blue-500"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="font-poppins mt-3 w-auto h-7 px-3 rounded-md bg-transparent text-red-500 hover:border border-red-500"
              >
                Delete
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default EditProfile;
