import React, { useEffect, useState } from "react";
import Ad from "../Components/styles-store/ad";
import AdCategory from "../Components/styles-store/adCategory";
import { Link } from "react-router-dom";
import BackNav from "../Components/BackNav";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi, getSubCategoryApi } from "../Store/GetCategorySlice";

const Post = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryApi());
  }, [dispatch]);

  const { allCategory, allSubCategory } = useSelector((state) => ({
    allCategory: state.allCategory.allCategory,
    allSubCategory: state.allCategory.allSubCategory,
  }));
  const categorys = allCategory?.category;
  console.log(categorys);

  const subCategorys = allSubCategory?.subcategory;

  console.log(subCategorys);

  const handleClick = (subcategoryID) => {
    dispatch(getSubCategoryApi(subcategoryID));
  };

  return (
    <>
      <BackNav />
      <div className="w-full h-screen bg-slate-100 flex justify-center items-center flex-col">
        <h1 className="text-2xl sm:text-3xl font-bold font-poppins text-slate-900 mb-5">
          POST YOUR AD
        </h1>
        <div className="w-1/2 h-auto rounded-lg flex">
          <div className="w-1/2">
            {categorys?.map((category, key) => (
              <Ad
                onClick={() => {
                  handleClick(category._id);
                }}
                key={key}
                category={category?.categoryName}
                // icon={<AiFillCar />}
              />
            ))}
          </div>

          <div className="w-1/2">
            <Link to={"/post/cars"}>
              {subCategorys?.map((subcategory, key) => (
                <AdCategory
                  key={key}
                  AdCategory={subcategory?.subcategoryName}
                />
              ))}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
