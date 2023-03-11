import { Favorite } from "@mui/icons-material";
import React, { useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md"
import { Link } from "react-router-dom";

const Banner = () => {

  const [itemsToShow, setItemsToShow] = useState(8);

  const toggle = () => {
    setItemsToShow(itemsToShow + 5);
  };

  return (
    <div className="w-full h-auto flex flex-wrap justify-center gap-10 px-10 pt-16 pb-24  sm:pt-28 sm:px-40 relative">
      
      {Array.from({ length: itemsToShow }).map((_, idx) => (
        <Link to={"/singlepage"}>
        <div className="banner-card w-80 h-96 rounded-xl border border-gray-300 overflow-hidden relative">
            <span className="absolute right-3 top-3 text-3xl cursor-pointer z-10"><MdOutlineFavoriteBorder className="text-slate-500 hover:text-pink-500"/></span>
          <div className="image-section w-full h-1/2 overflow-hidden">
            <img
              className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110"
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className="text-section w-full h-1/2 bg-slate-100 font-poppins text-center flex  items-center flex-col">
            <span className="text-2xl font-bold text-slate-900">Watch</span>
            <span className="text-2xl font-bold">₹ 120000</span>
            <p className="text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              liberoodi.
            </p>
            {/* <button className="w-32 h-10 bg-green-600  text-white mt-1 border-none rounded-3xl hover:bg-green-700 transition duration-150">
              add to cart
            </button> */}
            <span className="absolute right-2 bottom-1 text-xs sm:text-sm">Yesterday</span>
          </div>
        </div>
        </Link>
      ))}
 <button onClick={toggle} className="absolute bottom-6 w-28 h-10 border-2 border-blue-400 rounded-xl drop-shadow-lg font-poppins text-blue-700 hover:bg-blue-400 hover:text-slate-50">Show More</button>
    </div>
  );
};

export default Banner;

