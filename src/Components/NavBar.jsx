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
import bell from "../assets/Navbar/bell.svg";
import notification from "../assets/Navbar/notification.svg";
import { IoMdAddCircle } from "react-icons/io";
import ImageAdder from "../Pages/SinglePages/ImageAdder";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [clicked, setClicked] = useState("");
  const [userId, setUserId] = useState();
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="w-full bg-slate-50 min-h-[86px] px-40 flex flex-wrap justify-between items-center fixed top-0 left-0 z-20 font-outfit">
      <div onClick={scrolltoTop} className="w-[164px] h-[43px] cursor-pointer">
        <img className="w-full h-full" src={logo} alt="logo" />
      </div>
      <div className="flex gap-7 flex-wrap">
        <div className="w-[219px] h-10 border-2 border-[#3131FF] rounded bg-transparent text-lg text-[#3131FF] relative">
          <img
            className="absolute w-4 h-4 inset-y-1/2 left-2 transform: -translate-y-1/2"
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
            <button className="w-[100px] h-10 rounded bg-[#3131FF] text-slate-50 text-xl font-semibold tracking-wider transform transition duration-500 ease-in-out shadow-[0px_0px_20px_rgba(49,49,255,0.55)]">
              SELL
            </button>
          </Link>
        ) : (
          <button
            onClick={() => {setShowModal(true);
              setClicked({...clicked,sell:"sell"})
            }}
            className="w-[100px] h-10 rounded bg-[#3131FF] text-slate-50 text-xl font-semibold tracking-wider transform transition duration-500 ease-in-out shadow-[0px_0px_20px_rgba(49,49,255,0.55)]"
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
            {profile?.photos && profile.photos.length > 0 ? (
              <>
                {profile?.photos?.map((photo, key) =>
                  (<Avatar
                    key={key}
                    alt="user-photo"
                    src={photo?.url}
                    sx={{ width: 50, height: 50 ,border: 2 , borderColor: "blue"}}
                  />)
                )}
              </>
            ) : (
              <Avatar alt="user-photo" src="" sx={{ width: 50, height: 50 }} />
            )}
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
                    {profile?.photos && profile.photos.length > 0 ? (
                      <>
                        {profile?.photos?.map((photo, key) => (
                          <Avatar
                            key={key}
                            alt="user-photo"
                            src={photo?.url}
                            sx={{ width: 70, height: 70 }}
                          />
                        ))}
                      </>
                    ) : (
                      <div className="relative">
                        <Avatar
                          alt="user-photo"
                          src=""
                          sx={{ width: 70, height: 70 }}
                        />
                        <button
                          onClick={()=>{handleClickOpen();
                          setUserId(profile?._id)}}
                          className="absolute top-10 -right-2 text-4xl w-auto h-auto text-blue-500 bg-transparent"
                        >
                          <IoMdAddCircle />
                        </button>
                      </div>
                    )}
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
                  </span>
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
        <button
          onClick={() => {setShowModal(true);
            setClicked({...clicked,login:"login"})}}
          className="bg-transparent text-xl text-[#3131FF] font-semibold"
        >
          Login
        </button>
      )}
      {showModal ? <LoginPage setShowModal={setShowModal} login={clicked.login} sell={clicked.sell} /> : null}
      <ImageAdder open={open} setOpen={setOpen} userId={userId} />
    </nav>
  );
};

export default NavBar;
