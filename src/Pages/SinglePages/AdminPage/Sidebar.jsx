import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { BiCategory,BiHome } from "react-icons/bi";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path ? "bg-blue-500" : "";
  };

  return (
    <div className="w-80 min-h-screen bg-slate-900 text-slate-50 font-poppins">
      <nav className="flex flex-col gap-5 pt-16">
        <NavLink
          className={`flex items-center justify-start pl-6 py-2 text-lg rounded-xl hover:bg-gray-700 hover:text-slate-50 ${isActive(
            "/dashboard"
          )}`}
          to="/dashboard"
        >
          <span className="-mt-1 mr-4 text-2xl">
            <BiHome />
          </span>
          <span>Home</span>
        </NavLink>
        <NavLink
          className={`flex items-center justify-start pl-6 py-2 text-lg rounded-xl hover:bg-gray-700 hover:text-slate-50 ${isActive(
            "/dashboard/users"
          )}`}
          to="/dashboard/users"
        >
          <span className="-mt-1 mr-4 text-2xl">
            <FiUser />
          </span>
          <span>Users</span>
        </NavLink>
        <NavLink
          className={`flex items-center justify-start pl-6 py-2 text-lg rounded-xl hover:bg-gray-700 hover:text-slate-50 ${isActive(
            "/dashboard/categories"
          )}`}
          to="/dashboard/categories"
        >
          <span className="-mt-1 mr-4 text-2xl">
            <BiCategory />
          </span>
          <span>Categories</span>
        </NavLink>
        <NavLink
          className={`flex items-center justify-start pl-6 py-2 text-lg rounded-xl hover:bg-gray-700 hover:text-slate-50 ${isActive(
            "/dashboard/products"
          )}`}
          to="/dashboard/products"
        >
          <span className="-mt-1 mr-4 text-2xl">
            <MdProductionQuantityLimits />
          </span>
          <span>Products</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
