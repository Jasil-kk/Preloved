import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import { FiUser } from "react-icons/fi";
import { MdOutlineSettings } from "react-icons/md";
import { IoPower } from "react-icons/io5"
import Profile from "./Profile";
import { useDispatch, useSelector } from "react-redux";
import { signOutApi } from "../../../Store/AuthSlice";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 15,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(22),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    fontFamily: "poppins",
  },
}));

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
    const [opener, setOpener] = useState(false);
const {profile} = useSelector ((state)=> state.auth)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleOpen = () => setOpener(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutApi(navigate))
  }

  return (
    <div className="w-full h-20 flex items-center bg-slate-900 text-slate-50 font-poppins fixed z-10">
      <div className="w-full px-5 flex items-center justify-start">
        <h1 className="ml-10 text-2xl text-slate-50">Prel💓ved</h1>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Stack
          onClick={handleClick}
          className="ml-auto cursor-pointer"
          direction="row"
          spacing={2}
        >
         {profile?.photos && profile.photos.length > 0 ? (
              <>
                {profile?.photos?.map((photo, key) => (
                  <Avatar
                    sx={{ width: "50px", height: "50px",border: 2 , borderColor:"#f5f5fa" }}
                    alt="photo"
                    src={photo?.url}
                  />
                ))}
              </>
            ) : (
              <Avatar
                sx={{ width: "50px", height: "50px" }}
                alt="photo"
                src=""
              />
            )}
        </Stack>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div className="w-40 font-poppins flex flex-col gap-1 p-4">
            <div onClick={handleOpen} className="w-full px-3 h-7 text-slate-800 flex items-center gap-2 cursor-pointer rounded hover:bg-slate-200">
              <FiUser className="text-md" />
              <h4 className="text-sm">Profile</h4>
            </div>
            <div className="w-full px-3 h-7 text-slate-800 flex items-center gap-2 cursor-pointer rounded hover:bg-slate-200">
              <MdOutlineSettings className="text-md" />
              <h4 className="text-sm">Settings</h4>
            </div>
            <div onClick={handleLogout} className="mt-3 w-full px-3 h-7 text-red-400 flex items-center gap-2 cursor-pointer border-t-2 border-slate-200 rounded hover:bg-red-300 hover:text-slate-50">
              <IoPower className="text-md" />
              <h4 className="text-sm">Logout</h4>
            </div>
          </div>
        </Popover>
      </div>
      <Profile open={opener} setOpen={setOpener}/>
    </div>
  );
};

export default Header;
