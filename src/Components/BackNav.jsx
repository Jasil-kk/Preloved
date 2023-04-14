import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const BackNav = () => {
  const scrolltoTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="w-full h-10 bg-transparent fixed top-0 left-0">
      <Link onClick={scrolltoTop} to={"/"}>
        <button className="text-3xl text-slate-900 bg-transparent px-5 h-10 rounded-md">
          <BiArrowBack />
        </button>
      </Link>
    </div>
  );
};

export default BackNav;
