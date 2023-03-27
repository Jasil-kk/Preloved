import React, { useEffect, useState } from "react";
import Ad from "../Components/styles-store/ad";
import AdCategory from "../Components/styles-store/adCategory";
import { Link } from "react-router-dom";
import BackNav from "../Components/BackNav";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi, getSubCategoryApi } from "../Store/GetCategorySlice";

const Post = () => {
  const [selectedId, setSelectedId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryApi());
  }, [dispatch]);

  const { allCategory, allSubCategory } = useSelector((state) => ({
    allCategory: state.allCategory.allCategory,
    allSubCategory: state.allCategory.allSubCategory,
  }));
  const categorys = allCategory?.category;

  const subCategorys = allSubCategory?.subcategory;

  const handleClick = (categoryID) => {
    dispatch(getSubCategoryApi(categoryID));
  };
  
  const subcategoryPaths = {
    car: "/post/cars",
    motorcycle: "/post/motorcycle",
    scooter: "/post/motorcycle",
    sparepart: "/post/sparepart",
    bicycle: "/post/bicycle",
    "mobile phone": "/post/mobilephone",
    accessories: "/post/accessories",
    tablet: "/post/tablet",
    "tvs,video-audio": "/post/electronic&appliances",
    "kitchen & other appliances": "/post/electronic&appliances",
    "computer & laptops": "/post/electronic&appliances",
    fridges: "/post/electronic&appliances",
    acs: "/post/electronic&appliances",
    "washing machines": "/post/electronic&appliances",
    "commercial & other vehicles": "/post/commercial-spare",
    "spare parts": "/post/spare",
    "sofa & dining": "/post/furniture",
    "beds & wardrobes": "/post/furniture",
    "kids furniture": "/post/furniture",
    "other household items": "/post/furniture",
    men: "/post/fashion",
    women: "/post/fashion",
    kids: "/post/fashion",
    "fishes & aquarium": "/post/pets",
    dogs: "/post/pets",
    "other pets": "/post/pets",
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
            {categorys?.map((category) => (
              <Ad
                key={category._id}
                onClick={() => {
                  handleClick(category._id);
                  setSelectedId(category._id);
                }}
                category={category?.categoryName}
                // icon={<AiFillCar />}
              />
            ))}
          </div>

          <div className="w-1/2">
            {subCategorys?.map((subcategory, key) => (
              <Link
                key={key}
                to={`${subcategoryPaths[subcategory.subcategoryName.toLowerCase()]}/${selectedId}/${subcategory._id}`}
              >
                <AdCategory AdCategory={subcategory?.subcategoryName} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
