import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import door from "../assets/Banner/door.svg";
import favWhite from "../assets/Banner/favWhite.svg";
import favPink from "../assets/Banner/favPink.svg";
import { useDispatch, useSelector } from "react-redux";
import { getPostApi } from "../Store/AdminSlice";

const Banner = () => {
  const [pageLimit, setPageLimit] = useState(10);
  const [show, setShow] = useState(true);
  const [page, setPage] = useState(1);
  const { getPost } = useSelector((state) => state.adminWork);

  const dispatch = useDispatch();

  const handleClick = (id) => {
    setShow({ ...show, [id]: !show[id] });
  };

  useEffect(() => {
    dispatch(getPostApi({ page, pageLimit }));
  }, [pageLimit]);
  const products = getPost?.product;
  console.log(products);

  const toggle = () => {
    setPageLimit(pageLimit + 5);
  };

  return (
    <div className="w-full h-auto bg-slate-50 flex flex-wrap justify-center gap-[70px] px-10 pt-16 pb-32  sm:pt-28 sm:px-40 font-outfit relative">
      {products?.map((product, key) => (
        <div
          key={key}
          className="w-[232px] h-[400px] rounded-lg border border-blue-400 overflow-hidden relative"
        >
          <span className="absolute right-3 top-0 text-3xl cursor-pointer z-10">
            <img className="w-full h-full relative" src={door} alt="door" />

            <img
              src={show[key] ? favPink : favWhite}
              onClick={() => handleClick(key)}
              className="absolute top-3 left-1/2 right-1/2 transform: -translate-x-1/2"
            />
          </span>
          <Link to={`/singlepage/${product?._id}`}>
            <div className="w-full h-[236px] overflow-hidden">
              <img
                className="w-full h-full aspect-auto object-cover transform transition duration-500 ease-in-out hover:scale-110"
                src={product?.photos[0]?.url}
                alt="card-pic"
              />
            </div>
            <div className="w-full h-full flex flex-col pl-4 pr-1 pt-4 border-l-2 border-[#8D8FFE]">
              <span className="text-base font-semibold text-slate-900">
                ₹ {product?.price}
              </span>
              <span className="mt-2 font-normal text-md text-slate-700 capitalize">
                {product?.title}
              </span>
              <span className="absolute text-slate-500 right-3 bottom-2 text-sm font-normal">
                {product?.updatedAt
                  ? new Date(product.updatedAt).toDateString() ===
                    new Date().toDateString()
                    ? "Today"
                    : new Date(product.updatedAt).toDateString() ===
                      new Date(Date.now() - 86400000).toDateString()
                    ? "Yesterday"
                    : `${new Date(product.updatedAt).toLocaleString("default", {
                        month: "short",
                      })} ${new Date(product.updatedAt).getDate()}`
                  : ""}
              </span>
            </div>
          </Link>
        </div>
      ))}
      <button
        onClick={toggle}
        className="absolute bottom-10 w-[139px] h-10 rounded font-semibold text-xl text-[#3131FF] border-2 border-[#3131FF] transform transition duration-600 ease-in-out hover:bg-[#3131FF] hover:text-slate-50"
      >
        See More
      </button>
      <div className="absolute bottom-0 w-4/5 h-[1px] bg-[#3131FF]"></div>
    </div>
  );
};

export default Banner;
