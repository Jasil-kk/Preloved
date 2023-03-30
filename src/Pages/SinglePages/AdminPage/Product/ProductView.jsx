import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { singlePostApi } from "../../../../Store/AdminSlice";
import { useParams } from "react-router-dom";

const ProductView = () => {
  const { singleProduct } = useSelector((state) => state.adminWork);

  const dispatch = useDispatch();
  const params = useParams();

  const productID = params.id;

  const singleProducts = singleProduct?.product;
  console.log(singleProducts);

  const Details = singleProducts?.details;
  const photos = singleProducts?.photos;

  useEffect(() => {
    dispatch(singlePostApi(productID));
  }, [dispatch]);

  return (
    <div className="w-full min-h-screen p-10 bg-slate-300 flex items-center flex-col font-poppins">
      <div className="p-5 w-1/2 h-auto bg-slate-50 rounded-xl">
        <h2 className="text-slate-900 text-3xl font-bold text-center">
          Post Item Details
        </h2>
        <div className="ml-10 mt-16">
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">User :</h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.userId?.name}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Category :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.categoryId?.categoryName}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              SubCategory :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.subcategoryId?.subcategoryName}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              District :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.district}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">City :</h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.city}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Title :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.title}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Description :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              {singleProducts?.description}
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Price :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              ₹ {singleProducts?.price}
            </h5>
          </div>
          {Details ? (
            <div className="mt-5 flex flex-col">
              <h3 className="w-48 text-blue-700 text-xl font-semibold">
                Details :
              </h3>
              <div className="ml-20">
                {Details?.brand ? (
                  <div className="ml-3 mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      Brand :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.brand}
                    </h5>
                  </div>
                ) : null}
                {Details?.type ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      Type :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.type}
                    </h5>
                  </div>
                ) : null}
                {Details?.year ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      Year :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.year}
                    </h5>
                  </div>
                ) : null}
                {Details?.fuel ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      Fuel :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.fuel}
                    </h5>
                  </div>
                ) : null}
                {Details?.kmDriven ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      KM Driver :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.kmDriven} km
                    </h5>
                  </div>
                ) : null}
                {Details?.noOfOwner ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      No. of Owner :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      {Details?.noOfOwner}
                    </h5>
                  </div>
                ) : null}
                {Details?.transmissionType ? (
                  <div className="ml-3  mt-4 flex">
                    <h4 className="w-52 text-blue-500 text-lg font-semibold">
                      Transmission Type :
                    </h4>
                    <h5 className="text-slate-800 text-xl font-medium capitalize">
                      manual
                    </h5>
                  </div>
                ) : null}
              </div>
            </div>
          ) : null}
          <div className="mt-5 flex flex-col">
            <h3 className="w-48 text-blue-700 text-xl font-semibold mb-1">
              Photos :
            </h3>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {photos?.map((item, key) => (
                <ImageListItem key={key}>
                  <img src={item?.url} alt="photos" />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
