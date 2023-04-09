import React, { useState } from "react";
import { Link } from "react-router-dom";
import door from "../assets/Banner/door.svg";
import favWhite from "../assets/Banner/favWhite.svg";
import favPink from "../assets/Banner/favPink.svg";
import Painting from "../assets/Banner/Painting.png";

const Banner = () => {
  const [itemsToShow, setItemsToShow] = useState(10);
  const [show, setShow] = useState(false);

  const handleClick = (id) => {
    setShow({ ...show, [id]: !show[id] });
  };

  const toggle = () => {
    setItemsToShow(itemsToShow + 5);
  };

  return (
    <div className="w-full h-auto bg-slate-50 flex flex-wrap justify-center gap-[70px] px-10 pt-16 pb-24  sm:pt-28 sm:px-40 font-outfit relative">
      {Array.from({ length: itemsToShow }).map((_, idx) => (
        <div
          key={idx}
          className="w-[232px] h-[400px] rounded-lg border border-blue-400 overflow-hidden relative"
        >
          <span className="absolute right-3 top-0 text-3xl cursor-pointer z-10">
            <img className="w-full h-full relative" src={door} alt="door" />

            <img
              src={!show[idx] ? favWhite : favPink}
              onClick={() => handleClick(idx)}
              className="absolute top-3 left-1/2 right-1/2 transform: -translate-x-1/2"
            />
          </span>
          <Link to={"/singlepage"}>
            <div className="w-full h-[236px] overflow-hidden">
              <img
                className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110"
                src={Painting}
                alt="card-pic"
              />
            </div>
            <div className="w-full h-full flex flex-col pl-4 pr-1 pt-4 border-l-2 border-[#8D8FFE]">
              <span className="text-base font-semibold text-slate-900">
                ₹ 98,86,000
              </span>
              <span className="mt-2 font-normal text-sm text-slate-600">
                BMW X7 G07 Turbo 6-Cylinder Petrol
              </span>
              <span className="absolute text-slate-500 right-3 bottom-2 text-sm font-normal">
                Yesterday
              </span>
            </div>
          </Link>
        </div>
      ))}
      <button
        onClick={toggle}
        className="absolute bottom-6 w-[139px] h-10 rounded font-semibold text-xl text-[#3131FF] border-2 border-[#3131FF] transform transition duration-600 ease-in-out hover:bg-[#3131FF] hover:text-slate-50"
      >
        See More
      </button>
    </div>
  );
};

export default Banner;
