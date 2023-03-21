import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubCategoryApi } from "../../../../Store/GetCategorySlice";

const CatSingleView = () => {
  const { allSubCategory } = useSelector((state) => state.allCategory);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCategoryApi(categoryID));
  }, [dispatch]);

  const categoryID = params.id;

  console.log(categoryID);

  const subcategory = allSubCategory?.subcategory;
  console.log(subcategory);

  return (
    <div className="w-full min-h-screen bg-slate-300 flex justify-center items-start font-poppins">
      <div className="w-1/2 mt-20 h-auto p-5 bg-slate-50 flex flex-col items-center rounded-xl">
        <h1 className="text-4xl font-bold">Bike</h1>
        <h2 className="text-2xl font-semibold mt-7">Sub Categories</h2>
        <div className="w-full flex justify-center items-center">
          <div className="w-1/2 my-5 h-12 p-3 rounded-md border border-blue-400 flex items-center justify-center">
            <h3 className="text-xl text-slate-800">heloo</h3>
          </div>
          <button className="w-auto ml-2 px-3 h-12 rounded-md flex items-center bg-green-600 text-slate-50">
            Update
          </button>
          <button className="w-auto ml-2 px-3 h-12 rounded-md flex items-center bg-red-600 text-slate-50">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CatSingleView;
