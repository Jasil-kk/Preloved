import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { userProfileApi } from "../../../Store/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPostAllApi, usersGetApi } from "../../../Store/AdminSlice";
import { getCategoryApi } from "../../../Store/GetCategorySlice";
import cardImg from "../../../assets/sapiens.svg";
import Profile from "./Profile";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const { profile, users, getPost, allCategory } = useSelector((state) => ({
    profile: state.auth.profile,
    users: state.adminWork.users,
    getPost: state.adminWork.getPost,
    allCategory: state.allCategory.allCategory,
  }));

  const dispatch = useDispatch();
  const userDetail = profile?.result;
  console.log(userDetail);

  useEffect(() => {
    dispatch(userProfileApi());
    dispatch(getPostAllApi());
    dispatch(getCategoryApi());
    dispatch(usersGetApi());
  }, []);
  const usersCount = users?.result?.length;
  const productCount = getPost?.total;
  const categoryCount = allCategory?.category?.length;

  const handleOpen = () => setOpen(true);

  return (
    <div className="w-full p-5 font-poppins">
      <div className="flex flex-wrap gap-10 p-5">
        <div className="w-96 xl:w-1/3 h-72 bg-slate-50 rounded-xl overflow-hidden relative drop-shadow-xl">
          <div className="w-full h-1/2 flex justify-between bg-slate-300">
            <div className="mt-5 ml-5">
              <h3 className="text-blue-500 text-md">Welcome Back !</h3>
              <p className="text-blue-600 text-2xl font-semibold">Jasil</p>
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
            <Avatar
              sx={{ width: "70px", height: "70px" }}
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/14036408/pexels-photo-14036408.jpeg?auto=compress&cs=tinysrgb&w=1600"
            />
          </Stack>
        </div>
        <div className="flex flex-wrap gap-5">
          <div className="w-72 h-24 px-5 flex items-center justify-between bg-slate-100 rounded-xl drop-shadow-xl">
            <div className="flex flex-col">
              <h4 className="text-md text-slate-600">Users</h4>
              <h3 className="text-xl text-slate-700 font-semibold">
                {usersCount}
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
                {categoryCount}
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
                {productCount}
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
