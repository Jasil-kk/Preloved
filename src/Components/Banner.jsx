import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md"

const Banner = () => {
  return (
    <div className="w-full h-auto flex flex-wrap justify-center gap-10 px-10 pt-16  sm:pt-28 sm:px-40">
      {Array.from({ length: 17 }).map((_, idx) => (
        <div className="banner-card w-80 h-96 rounded-xl border border-gray-300 overflow-hidden relative">
            <span className="absolute right-3 top-3 text-3xl cursor-pointer"><MdOutlineFavoriteBorder className="text-slate-500 hover:text-pink-400"/></span>
          <div className="image-section w-full h-1/2 overflow-hidden">
            <img
              className="w-full h-full transform transition duration-500 ease-in-out hover:scale-110"
              src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <div className="text-section w-full h-1/2 bg-gray-300 font-poppins text-center">
            <span className="text-2xl font-bold text-slate-900">hello</span>
            <p className="text-slate-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              liberoodi, odit, itaque dolores sapiente et voluptates!
            </p>
            <button className="w-36 h-11 bg-green-600  text-white mt-2 sm:mt-3 border-none rounded-3xl hover:bg-green-700 transition duration-150">
              add to cart +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;

