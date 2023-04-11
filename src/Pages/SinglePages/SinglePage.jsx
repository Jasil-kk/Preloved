import React, { useEffect } from "react";
import BackNav from "../../Components/BackNav";
import ImageSwiper from "../../Components/styles-store/ImageSwiper";
import { useDispatch, useSelector } from "react-redux";
import { singlePostApi } from "../../Store/AdminSlice";
import { useParams } from "react-router-dom";

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
                <p className="text-xs sm:text-sm text-slate-600">{updatedAt}</p>
              </span>
            </div>
          </div>
          <div className="bg-slate-100 w-72 sm:w-96 md:w-[800px] border border-slate-500">
            <div className="p-3 sm:p-5 border-b border-slate-400">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Details
              </h2>
              <span className="mt-3 flex gap-10 sm:gap-14">
                <p className="text-sm sm:text-lg text-slate-600">Brand</p>
                <p className="text-sm sm:text-lg text-slate-800">Infinix</p>
              </span>
            </div>
            <div className="p-3 sm:p-5">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
                Description
              </h2>
              <p className="text-sm sm:text-lg mt-3 text-slate-800">
                Mobile in new condition, only 1 month used with 2 back cover
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePage;
