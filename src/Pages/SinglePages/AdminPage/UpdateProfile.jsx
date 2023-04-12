import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import InputField from "../../../Components/styles-store/InputField";
import { useDispatch } from "react-redux";
import { profileUpdateApi, userProfileApi } from "../../../Store/AuthSlice";

const UpdateProfile = ({ opener, setOpener, name, email, mobileNo }) => {
    const [inputValue, setInputValue] = useState();
  const handleClose = () => {
    setOpener(false);
  };

  const dispatch = useDispatch();

  const handleUpdate = () => {
    dispatch(profileUpdateApi({inputValue})).then(()=>{
      dispatch(userProfileApi());
    });
  };
  return (
    <div className="font-poppins">
      <Dialog open={opener} onClose={handleClose}>
        <DialogContent sx={{ width: "500px" }}>
          <DialogContentText
            sx={{
              fontFamily: "poppins",
              fontSize: "20px",
              textAlign: "center",
            }}
          >
            Update your profile
          </DialogContentText>
          <Stack
            direction="row"
            marginTop={2}
            alignItems="center"
            width={150}
            height={150}
            border={5}
            borderColor={"#d6d4d9"}
            borderRadius={"50%"}
            position={"relative"}
            overflow={"hidden"}
          >
            <Avatar
              sx={{
                width: "100%",
                height: "100%",
              }}
              alt="Travis Howard"
              src="https://images.pexels.com/photos/14036408/pexels-photo-14036408.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
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
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
          </Stack>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 3, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <InputField type={"text"} onChange={(e)=>setInputValue({...inputValue,name:e.target.value})} label={"Name"} defaultValue={name} />
            <InputField type={"email"} onChange={(e)=>setInputValue({...inputValue,email:e.target.value})} label={"Email"} defaultValue={email} />
            <InputField
              type={"number"}
              onChange={(e)=>setInputValue({...inputValue,mobileNo:e.target.value})}
              label={"Mobile No"}
              defaultValue={mobileNo}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ gap: 6, paddingRight: 6 }}>
          <Button
            onClick={handleClose}
            sx={{ ":hover": { background: "#1ca7e8", color: "white" } }}
          >
            Cancel
          </Button>
          <Button
            onClick={()=>{handleUpdate();
            handleClose()}}
            sx={{
              color: "green",
              ":hover": { background: "#08a662", color: "white" },
            }}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateProfile;
