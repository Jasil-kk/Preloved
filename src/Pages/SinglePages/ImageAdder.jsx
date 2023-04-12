import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useDispatch } from "react-redux";
import { profileImageApi, userProfileApi } from "../../Store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ImageAdder = ({ open, setOpen, userId }) => {
  const [imageSrc, setImageSrc] = useState("");

  const handleFileSelection = (e) => {
    const file = e.target.files[0];
    setImageSrc(URL.createObjectURL(file));
    if (file) {
      handleSave(file);
    }
  };
  const dispatch = useDispatch();

  const handleSave = (file) => {
    const formData = new FormData();
    formData.append("photo", file, file.name);
    dispatch(profileImageApi({ userId, formData })).then(() => {
      dispatch(userProfileApi());
    });
  };


  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle sx={{ fontFamily: "poppins", paddingX: 12 }}>
          {"Add a picture to your profile"}
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: 12,
          }}
        >
          <div className="w-52 h-52 rounded-full border-4 border-blue-400 overflow-hidden relative">
            <IconButton
              sx={{
                position: "absolute",
                bottom: "0",
                left: "0",
                width: "100%",
              }}
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                onChange={handleFileSelection}
                hidden
                accept="image/*"
                type="file"
              />
              <PhotoCamera />
            </IconButton>
            {imageSrc && (
              <img
                src={imageSrc}
                className="w-full h-full object-cover"
                alt="Selected"
              />
            )}
          </div>
        </DialogContent>
        <DialogActions sx={{ gap: 2, paddingRight: 3 }}>
          <Button
            sx={{
              ":hover": { background: "#1ca7e8", color: "white" },
              fontFamily: "poppins",
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            sx={{
              ":hover": { background: "#08a662", color: "white" },
              fontFamily: "poppins",
            }}
            onClick={ () => {
                handleClose();
              handleSave();
              
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ImageAdder;
