import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { userProfileApi } from "../../../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { getCountApi } from "../../../Store/AdminSlice";
import cardImg from "../../../assets/sapiens.svg";
import Profile from "./Profile";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const { profile, count } = useSelector((state) => ({
    profile: state.auth.profile,
    count: state.adminWork.count,
  }));

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(userProfileApi(token));
    dispatch(getCountApi());
  }, [dispatch]);

  console.log(count);
  const handleOpen = () => setOpen(true);

  return (
    <div className="w-full bg-slate-50 p-5 font-poppins min-h-screen">
      <div className="flex flex-wrap gap-10 p-5">
        <div className="w-[500px] h-72 bg-slate-50 rounded-xl overflow-hidden relative drop-shadow-xl">
          <div className="w-full h-1/2 flex justify-between bg-violet-200">
            <div className="mt-5 ml-5">
              <h3 className="text-blue-500 text-md">Welcome Back !</h3>
              <p className="text-blue-600 text-2xl font-semibold capitalize">
                {profile?.name}
              </p>
            </div>
            <img className="w-80 h-72" src={cardImg} alt="bgimage" />
          </div>
          <div className="w-full h-1/2 flex items-center justify-end px-5">
            <button
              onClick={handleOpen}
              className="mt-20 w-auto flex items-center px-2 h-9 bg-slate-50 text-sm text-blue-700 font-semibold border-2 border-blue-600 rounded-lg transform transition duration-500 ease-in-out hover:bg-blue-700 hover:text-slate-50"
            >
              View profile
            </button>
          </div>

          <Stack
            className="absolute top-1/2 left-12 transform -translate-x-1/2 -translate-y-1/2"
            direction="row"
            spacing={2}
            sx={{
              width: "auto",
              height: "auto",
              border: "5px solid white",
              borderRadius: "50%",
            }}
          >
            {profile?.photos && profile.photos.length > 0 ? (
              <>
                {profile?.photos?.map((photo, key) => (
                  <Avatar
                  key={key}
                    sx={{ width: "70px", height: "70px" }}
                    alt="photo"
                    src={photo?.url}
                  />
                ))}
              </>
            ) : (
              <Avatar
                sx={{ width: "70px", height: "70px" }}
                alt="photo"
                src=""
              />
            )}
          </Stack>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="w-72 h-24 px-5 flex items-center justify-between bg-slate-100 rounded-xl drop-shadow-xl">
            <div className="flex flex-col">
              <h4 className="text-md text-slate-600">Users</h4>
              <h3 className="text-xl text-slate-700 font-semibold">
                {count?.userCount}
              </h3>
            </div>
            <div className="w-14 h-14 text-2xl text-slate-50 flex items-center justify-center rounded-full bg-blue-500">
              <FiUser />
            </div>
          </div>
          <div className="w-72 h-24 px-5 flex items-center justify-between bg-slate-100 rounded-xl drop-shadow-xl">
            <div className="flex flex-col">
              <h4 className="text-md text-slate-600">Categories</h4>
              <h3 className="text-xl text-slate-700 font-semibold">
                {count?.categoryCount}
              </h3>
            </div>
            <div className="w-14 h-14 text-2xl text-slate-50 flex items-center justify-center rounded-full bg-blue-500">
              <BiCategory />
            </div>
          </div>
          <div className="w-72 h-24 px-5 flex items-center justify-between bg-slate-100 rounded-xl drop-shadow-xl">
            <div className="flex flex-col">
              <h4 className="text-md text-slate-600">Products</h4>
              <h3 className="text-xl text-slate-700 font-semibold">
                {count?.productCount}
              </h3>
            </div>
            <div className="w-14 h-14 text-2xl text-slate-50 flex items-center justify-center rounded-full bg-blue-500">
              <MdProductionQuantityLimits />
            </div>
          </div>
        </div>
      </div>
      <Profile open={open} setOpen={setOpen} />
    </div>
  );
};

export default Dashboard;
