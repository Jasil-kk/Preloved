import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import UpdateProfile from "./UpdateProfile";
import { IoMdAddCircle } from "react-icons/io";
import ImageAdder from "../ImageAdder";

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
  const [opener, setOpener] = useState(false);
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState();

  const { profile } = useSelector((state) => state.auth);

  const handleClose = () => setOpen(false);

  const handleClickOpen = () => {
    setOpener(true);
  };

  const handleClickOpener = () => {
    setShow(true);
  };
  return (
    <div className="font-poppins">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {profile?.photos && profile.photos.length > 0 ? (
            <>
              {profile?.photos?.map((photo, key) => (
                <Avatar
                  key={key}
                  alt="user-photo"
                  src={photo?.url}
                  sx={{ width: 110, height: 110,border: 3 , borderColor:"#b8b8bf" }}
                />
              ))}
            </>
          ) : (
            <div className="relative">
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                  border: "5px solid #d6d4d9",
                }}
                alt="Travis Howard"
                src=""
              ></Avatar>
              <button
                onClick={() => {
                  handleClose();
                  handleClickOpener();
                  setUserId(profile?._id);
                }}
                className="absolute -bottom-2 left-[50px] text-5xl w-auto h-auto text-blue-500 bg-transparent"
              >
                <IoMdAddCircle />
              </button>
            </div>
          )}
          <div className="ml-7 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">name :</p>
              <h2 className="text-2xl text-slate-800 font-semibold capitalize">
                {profile?.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">email :</p>
              <h2 className="text-lg text-slate-800">{profile?.email}</h2>
            </div>
            <div className="flex items-center gap-3">
              <p className="w-24 text-slate-500">mobile No :</p>
              <h2 className="text-lg text-slate-800 font-medium">
                {profile?.mobileNo}
              </h2>
            </div>
          </div>
          <button
            onClick={handleClickOpen}
            className="absolute w-auto px-3 h-8 rounded bg-blue-400 text-slate-50 right-5 bottom-5 hover:bg-blue-500"
          >
            Edit Profile
          </button>
        </Box>
      </Modal>
      {/* update profile */}
      <UpdateProfile
        opener={opener}
        setOpener={setOpener}
        name={profile?.name}
        email={profile?.email}
        mobileNo={profile?.mobileNo}
      />
      <ImageAdder open={show} setOpen={setShow} userId={userId} />
    </div>
  );
};

export default Profile;
