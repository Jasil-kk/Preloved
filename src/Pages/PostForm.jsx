import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DescriptionAd from "../Components/styles-store/DescriptionAd";
import TitleAd from "../Components/styles-store/TitleAd";
import { postApi } from "../Store/PostSlice";
import LocationAdder from "./Post Ad/LocationAdder";
import PhotoUploader from "./Post Ad/PhotoUploader";
import PostNowBtn from "./Post Ad/PostNowBtn";
import ReviewDetails from "./Post Ad/ReviewDetails";
import SetPrice from "./Post Ad/SetPrice";

const PostForm = ({ children, inputValue }) => {
  const [inputSelector, setInputSelector] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const categoryID = params.catId;
  const subCategoryID = params.subId;

  const handleSubmit = () => {
    dispatch(
      postApi({
        ...inputSelector,
        details: inputValue,
        categoryId: categoryID,
        subcategoryId: subCategoryID,
        navigate,
      })
    );
  };

  console.log(inputSelector);

  const pathName = window.location.pathname;
  const firstTwoPaths = pathName.split("/").slice(1, 3).join("/");

  return (
    <div className="w-full h-auto pb-20 bg-slate-200 flex flex-col items-center font-poppins">
      <h1 className="text-3xl font-bold mt-20">POST YOUR AD</h1>
      <div className="w-1/2 h-auto bg-slate-50 border border-blue-300">
        <div className="border-b p-5 border-blue-500">
          <h2 className="text-2xl font-semibold text-slate-800">
            SELECTED CATEGORY
          </h2>
          <h6 className="text-lg text-slate-600 mt-2">{firstTwoPaths}</h6>
        </div>
        <div className="">
          <h1 className="text-2xl font-semibold mt-5 ml-5">
            INCLUDE SOME DETAILS
          </h1>

          <div className="p-5 border-b border-blue-500">
            {children}
            <TitleAd input={inputSelector} setInput={setInputSelector} />
            <DescriptionAd input={inputSelector} setInput={setInputSelector} />
          </div>
          <SetPrice input={inputSelector} setInput={setInputSelector} />
          <PhotoUploader input={inputSelector} setInput={setInputSelector} />
          <LocationAdder input={inputSelector} setInput={setInputSelector} />
          <ReviewDetails />
          <PostNowBtn onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default PostForm;
