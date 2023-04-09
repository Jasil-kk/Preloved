import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Avatar from "@mui/material/Avatar";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { signOutApi, userProfileApi } from "../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/Navbar/logo.svg";
import searchIcon from "../assets/Navbar/searchIcon.svg";
import location from "../assets/Navbar/location.svg";
import bell from "../assets/Navbar/bell.svg"
import notification from "../assets/Navbar/notification.svg"
import avatar from "../assets/Navbar/avatar.svg"

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const { profile } = useSelector((state) => state.auth);

  const token = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutApi(navigate));
  };
  useEffect(() => {
    dispatch(userProfileApi(token));
  }, [token]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  return (
    <nav className="w-full bg-slate-50 h-32 sm:h-20 md:h-[86px] md:px-40 flex flex-wrap justify-between items-center fixed top-0 left-0 z-20 font-outfit">
      <div className="w-[164px] h-[43px]">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <div className="flex gap-7 flex-wrap">
        <div className="w-[219px] h-10 border-2 border-[#3131FF] rounded bg-transparent text-lg text-[#3131FF] relative">
          <img
            className="absolute w-5 h-5 inset-y-1/2 left-2  transform: -translate-y-1/2"
            src={location}
            alt="location"
          />
          <select
            name="state"
            id="state"
            className="w-full h-full pl-7 bg-transparent outline-none"
          >
            <option value="">Kerala</option>
            <option value="">Tamilnadu</option>
            <option value="">Karnataka</option>
            <option value="">Other states</option>
          </select>
        </div>

        <form action="" className="flex items-center">
          <input
            type="search"
            placeholder="Search for Cars, Mobile Phones and more"
            className="w-[606px] h-10 bg-slate-50 rounded pl-4 pr-2 text-base text-slate-700 border-2 border-[#3131FF] outline-none placeholder:text-[#8D8FFE]"
          />
          <button className="-ml-1 bg-[#3131FF] w-10 h-10 rounded px-2">
            <img src={searchIcon} alt="icon" />
          </button>
        </form>
        {token ? (
          <Link to={"/post"}>
          <button
          onClick={() => setShowModal(true)}
          className="w-[100px] h-10 rounded bg-[#3131FF] text-slate-50 text-xl font-semibold tracking-wider transform transition duration-500 ease-in-out hover:scale-105"
        >
          SELL
        </button>
        </Link>
        ) : (
        <button
          onClick={() => setShowModal(true)}
          className="w-[100px] h-10 rounded bg-[#3131FF] text-slate-50 text-xl font-semibold tracking-wider transform transition duration-500 ease-in-out hover:scale-105"
        >
          SELL
        </button>
        )}
      </div>
      {token ? (
        <div className="flex items-center gap-8">
          <div>
            <img src={notification} alt="notification" />
          </div>
          <div>
            <img src={bell} alt="bell" />
          </div>
          <span
            onClick={() => setShow(!show)}
            className="relative cursor-pointer"
          >
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{ width: 50, height: 50, border:2, borderColor: "#3131FF"}}
            />
            {show && (
              <div
                ref={ref}
                className="absolute top-14 -left-24 w-60 h-auto p-5 bg-slate-50 border border-slate-600 flex flex-col justify-center rounded-lg"
              >
                <div>
                  <span className="flex items-center justify-between">
                    <div>
                      <p className="text-slate-600 text-sm">Hello,</p>
                      <h1 className="text-slate-800 text-3xl font-semibold capitalize">
                        {profile?.name}
                      </h1>
                    </div>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      sx={{ width: 70, height: 70 }}
                    />
                  </span>
                  <Link
                    to={"/profile"}
                    className="text-slate-600 text-md underline underline-offset-2"
                  >
                    edit profile
                  </Link>
                </div>
                <button className="flex justify-center items-center gap-3 mt-5 w-full h-10 bg-pink-400 text-slate-50 text-lg rounded-lg">
                  <span className="text-2xl">
                    <MdOutlineFavoriteBorder />
                  </span>{" "}
                  My ADS
                </button>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full h-10 bg-red-600 text-slate-50 text-lg rounded-lg"
                >
                  Logout
                </button>
              </div>
            )}
          </span>
        </div>
      ) : (
        <button onClick={() => setShowModal(true)} className="bg-transparent text-xl text-[#3131FF] font-semibold">
          Login
        </button>
      )}
      {showModal ? <LoginPage setShowModal={setShowModal} /> : null}
    </nav>
  );
};

export default NavBar;
