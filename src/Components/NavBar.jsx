import React, { useEffect, useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import Avatar from "@mui/material/Avatar";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { signOutApi } from "../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  const token = localStorage.getItem("token");
  const user = localStorage.getItem("name");
  console.log(user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(signOutApi(navigate));
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
    }
  };

  return (
    <nav className="w-full bg-blue-700 h-32 sm:h-20 md:h-16 flex flex-wrap justify-around items-center fixed top-0 left-0 z-20">
      <ul className="flex gap-5 sm:gap-10 md:gap-20 text-white text-lg font-poppins">
        <li className="cursor-pointer hover:text-orange-900">Home</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Other</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <form action="" className="relative">
        <FiSearch className="absolute top-2 left-2  text-2xl text-slate-400" />
        <input
          type="search"
          placeholder="Search here..."
          className="w-80 h-10 rounded-lg pl-10 text-xl font-poppins outline-none"
        />
      </form>

      {token ? (
        <>
          <Link to={"/post"}>
            <button className="bg-slate-50 w-24 h-9 rounded-xl  text-slate-900 tracking-wider drop-shadow-lg font-poppins transform transition duration-500 ease-in-out hover:scale-105">
              SELL
            </button>
          </Link>
          <span
            onClick={() => setShow(!show)}
            className="relative cursor-pointer font-poppins"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/1648374/pexels-photo-1648374.jpeg?auto=compress&cs=tinysrgb&w=1600"
              sx={{ width: 50, height: 50 }}
            />
            {show && (
              <div ref={ref} className="absolute top-14 -left-24 w-60 h-auto p-5 bg-slate-50 border border-slate-600 flex flex-col justify-center rounded-lg">
                <span className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-600 text-sm">Hello,</p>
                    <h1 className="text-slate-800 text-3xl font-semibold">
                      {user}
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
        </>
      ) : (
        <button
          onClick={() => setShowModal(true)}
          className="w-24 h-9 rounded-xl  text-slate-900 tracking-wider drop-shadow-lg font-poppins transform transition duration-500 ease-in-out hover:scale-105"
        >
          SELL
        </button>
      )}
      {showModal ? <LoginPage setShowModal={setShowModal} /> : null}
    </nav>
  );
};

export default NavBar;

