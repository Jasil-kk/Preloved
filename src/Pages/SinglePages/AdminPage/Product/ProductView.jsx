import React from "react";
import { useSelector } from "react-redux";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const ProductView = () => {
  const { getPost } = useSelector((state) => state.adminWork);
  console.log(getPost);
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
  ];
  return (
    <div className="w-full min-h-screen p-10 bg-slate-300 flex items-center flex-col font-poppins">
      <div className="p-5 w-1/2 h-auto bg-slate-50 rounded">
        <h2 className="text-slate-900 text-3xl font-bold text-center">
          Post Item Details
        </h2>
        <div className="ml-10 mt-16">
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">User :</h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              jasil
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Category :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              Mobile
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              SubCategory :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              Mobile Phone
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              District :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              malappuram
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">City :</h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              kondotty
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Title :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              i phone 14 pro max
            </h5>
          </div>
          <div className="mt-5 flex">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Description :
            </h3>
            <h5 className="text-slate-800 text-xl font-medium capitalize">
              APPLE iPhone 14 Pro Max (Space Black, 128 GB)
            </h5>
          </div>
          <div className="mt-5 flex flex-col">
            <h3 className="w-48 text-blue-700 text-xl font-semibold">
              Details :
            </h3>
            {/* ₹1,28,099 */}
            <div className="ml-20">
              <div className="ml-3 mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  Brand :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  i phone
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  Type :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  phone
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  Year :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  2023
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  Fuel :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  petrol
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  KM Driver :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  2500 km
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  No. of Owner :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  2nd
                </h5>
              </div>
              <div className="ml-3  mt-4 flex">
                <h4 className="w-52 text-blue-500 text-lg font-semibold">
                  Transmission Type :
                </h4>
                <h5 className="text-slate-800 text-xl font-medium capitalize">
                  manual
                </h5>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <h3 className="w-48 text-blue-700 text-xl font-semibold mb-1">
              Photos :
            </h3>
            <ImageList
              sx={{ width: 500, height: 450 }}
              cols={3}
              rowHeight={164}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                  />
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
