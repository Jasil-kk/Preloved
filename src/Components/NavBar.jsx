import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import LoginPage from "./LoginPage";

const NavBar = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <nav className="w-full bg-blue-500 h-32 sm:h-20 md:h-16 flex flex-wrap justify-around items-center">
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
      <button
        onClick={() => setShowModal(true)}
        className="w-20 h-9 bg-orange-500 text-white rounded-xl text-md font-poppins tracking-wider drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-105 hover:bg-orange-600"
      >
        LOGIN
      </button>
      {showModal ? <LoginPage setShowModal={setShowModal} /> : null}
      <Link to={"/post"}>
        <button className="w-24 h-9 rounded-xl  text-slate-900 tracking-wider drop-shadow-lg font-poppins transform transition duration-500 ease-in-out hover:scale-105">
          SELL
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
