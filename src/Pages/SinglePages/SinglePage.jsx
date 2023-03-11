import React from "react";
import ImageSwiper from "../../Components/styles-store/ImageSwiper";

const SinglePage = () => {
  return (
    <div className="w-full h-auto bg-slate-50 p-10 flex justify-center items-center font-poppins">
      <div className="flex flex-col gap-2 justify-center items-center md:items-start">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5">
          <ImageSwiper />
          <div className="w-72 sm:w-96 md:w-[500px] h-auto p-2 sm:p-5 bg-slate-100 border border-slate-500">
            <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">₹ 21,333</h1>
            <h5 className="text-sm sm:text-lg text-slate-700 mt-4">
              1 year seller warranty on this refurbished phones bill warranty
            </h5>
            <span className="flex justify-between mt-3 sm:mt-5">
              <p className="text-xs sm:text-sm text-slate-600">Malappuram</p>
              <p className="text-xs sm:text-sm text-slate-600">Feb 16</p>
            </span>
          </div>
        </div>
        <div className="bg-slate-100 w-72 sm:w-96 md:w-[800px] border border-slate-500">
            <div className="p-3 sm:p-5 border-b border-slate-400">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Details</h2>
          <span className="mt-3 flex gap-10 sm:gap-14">
            <p className="text-sm sm:text-lg text-slate-600">Brand</p>
            <p className="text-sm sm:text-lg text-slate-800">Infinix</p>
          </span>
          </div>
          <div className="p-3 sm:p-5">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">Description</h2>
            <p className="text-sm sm:text-lg mt-3 text-slate-800">Mobile in new condition, only 1 month used with 2 back cover</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
