import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  minHeight: 250,
  fontFamily: "poppins",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
  display: "flex",
  alignItems: "center",
};

const Profile = ({ open, setOpen }) => {

const {profile} = useSelector((state)=> state.auth)

  const handleClose = () => setOpen(false);
  return (
    <div className="font-poppins">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar
            sx={{
              width: "150px",
              height: "150px",
              border: "5px solid #d6d4d9",
            }}
            alt="Travis Howard"
            src="https://images.pexels.com/photos/14036408/pexels-photo-14036408.jpeg?auto=compress&cs=tinysrgb&w=1600"
          />
          <div className="ml-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">name :</p>
              <h2 className="text-2xl text-slate-800 font-semibold">{profile?.name}</h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">email :</p>
              <h2 className="text-lg text-slate-800">{profile?.email}</h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">mobile No :</p>
              <h2 className="text-lg text-slate-800 font-medium">{profile?.mobileNo}</h2>
            </div>
          </div>
          <button className="absolute w-auto px-3 h-8 rounded bg-blue-400 text-slate-50 right-5 bottom-5 hover:bg-blue-500">Edit Profile</button>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
