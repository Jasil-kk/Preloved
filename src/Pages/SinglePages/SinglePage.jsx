import React, { useEffect, useState } from "react";
import BackNav from "../../Components/BackNav";
import ImageSwiper from "../../Components/styles-store/ImageSwiper";
import { useDispatch, useSelector } from "react-redux";
import { singlePostApi } from "../../Store/AdminSlice";
import { Link, useParams } from "react-router-dom";
import { AiFillWechat } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import { MdArrowForwardIos } from "react-icons/md";

const SinglePage = () => {
  const { singleProduct } = useSelector((state) => state.adminWork);
  const params = useParams();
  const dispatch = useDispatch();
  const productID = params.id;
  useEffect(() => {
    dispatch(singlePostApi(productID));
  }, [productID]);

  const product = singleProduct?.product;
  console.log(product);
  const updatedAt = product?.updatedAt
    ? new Date(product.updatedAt).toDateString() === new Date().toDateString()
      ? "Today"
      : new Date(product.updatedAt).toDateString() ===
        new Date(Date.now() - 86400000).toDateString()
      ? "Yesterday"
      : `${new Date(product.updatedAt).toLocaleString("default", {
          month: "short",
        })} ${new Date(product.updatedAt).getDate()}`
    : "";

  return (
    <>
      <BackNav />
      <div className="w-full h-auto bg-slate-50 p-10 flex justify-center items-center font-poppins">
        <div className="flex flex-col gap-2 justify-center items-center md:items-start">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-5">
            <ImageSwiper productImage={product?.photos[0]?.url} />
            <div>
              <div className="w-72 sm:w-96 md:w-[500px] h-auto p-2 sm:p-5 bg-slate-100 border border-slate-500">
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900">
                  ₹ {product?.price}
                </h1>
                <h5 className="text-sm sm:text-lg text-slate-700 mt-4">
                  {product?.description}
                </h5>
                <span className="flex justify-between mt-3 sm:mt-5">
                  <p className="text-xs sm:text-sm text-slate-600">
                    {product?.district}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {updatedAt}
                  </p>
                </span>
              </div>
              <Link to="/chatpage">
                <div className="mt-5 w-auto h-auto flex flex-col p-2 bg-slate-100 border border-slate-800 cursor-pointer">
                  <div className="flex">
                    <h5 className="text-lg text-slate-800">Chat with Seller</h5>
                    <span className="ml-auto text-4xl text-[#3131FF]">
                      <AiFillWechat />
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Avatar alt="Remy Sharp" src="" />
                    <h6 className="ml-4 text-lg text-slate-700">
                      {product?.userId?.name}
                    </h6>
                    <span className="ml-auto text-xl text-slate-500">
                      <MdArrowForwardIos />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="bg-slate-100 w-72 sm:w-96 md:w-[800px] border border-slate-500">
            {product?.details ? (
              <div className="p-3 sm:p-5 border-b border-slate-400">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  Details
                </h2>
                <span className="mt-5 flex flex-col gap-10">
                  <div className="flex gap-24">
                    {product?.details?.brand && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          Brand
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.brand}
                        </p>
                      </div>
                    )}
                    {product?.details?.fuel && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          Fuel
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.fuel}
                        </p>
                      </div>
                    )}
                    {product?.details?.kmDriven && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          KM Driven
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.kmDriven} KM
                        </p>
                      </div>
                    )}
                    {product?.details?.noOfOwner && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          No. Of Owner
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.noOfOwner}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-24">
                    {product?.details?.transmissionType && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          Transmission Type
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.transmissionType}
                        </p>
                      </div>
                    )}
                    {product?.details?.transmissionType && (
                      <div>
                        <p className="text-sm sm:text-lg text-slate-800 font-semibold">
                          Year
                        </p>
                        <p className="text-sm sm:text-lg text-slate-600">
                          {product?.details?.year}
                        </p>
                      </div>
                    )}
                  </div>
                </span>
              </div>
            ) : null}
            <div className="p-3 sm:p-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Description
              </h2>
              <p className="text-sm sm:text-lg mt-3 text-slate-800">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
