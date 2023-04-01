import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryApi } from "../../../../Store/GetCategorySlice";
import CreateCategory from "./CreateCategory";
import { RiEditFill } from "react-icons/ri";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin3Fill } from "react-icons/ri";
import UpdateCategory from "./UpdateCategory";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { deleteCategoryApi } from "../../../../Store/AdminSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  border: "1px solid #ffe600",
  borderRadius: "10px",
  boxShadow: 24,
  px: 2,
  pt: 2,
  pb: 1,
};

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");

  const { allCategory } = useSelector((state) => state.allCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryApi());
  }, [dispatch]);

  const categorys = allCategory?.category;
  console.log(categorys);

  const handleDelete = () => {
    dispatch(deleteCategoryApi(selectedCategoryId));
  };

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full min-h-screen bg-slate-50 flex items-center flex-col font-poppins">
      <div className="w-1/2 h-auto bg-slate-50 mt-8 flex flex-col items-center rounded-md">
        <h2 className="text-3xl mt-5 font-bold">Categories</h2>
        <div className="mt-6 w-4/5 flex flex-col items-center border border-slate-700 border-b-0 drop-shadow-xl">
          {categorys?.length > 0 ? (
            <>
              {categorys?.map((category, key) => (
                <div
                  key={key}
                  className="w-full bg-slate-50 flex items-center border-b border-slate-700"
                >
                  <div className="w-full h-14 bg-transparent p-3 flex items-center justify-between">
                    <h3 className="text-xl text-slate-800">
                      {category?.categoryName}
                    </h3>
                    <div className="flex gap-3">
                      <Link
                        to={`/dashboard/categories/${category?.categoryName}/${category?._id}`}
                      >
                        <button className="w-auto p-4 h-6 flex items-center rounded-md bg-blue-600 text-slate-50 transform transition duration-500 ease-in-out hover:bg-blue-700">
                          <BsFillEyeFill />
                        </button>
                      </Link>
                      <button
                        onClick={() => {
                          setSelectedCategoryId(category._id);
                          setShowModal2(true);
                        }}
                        className="w-auto p-4 h-6 bg-green-600 text-slate-50 text-xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-green-700"
                      >
                        <RiEditFill />
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCategoryId(category._id);
                          setSelectedCategoryName(category.categoryName);
                          setOpen(true);
                        }}
                        className="w-auto p-4 h-6 bg-red-600 text-slate-50 text-xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-red-700"
                      >
                        <RiDeleteBin3Fill />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h4 className="text-xl mb-5 text-red-700">No categories found</h4>
          )}
        </div>
        <button
          onClick={() => setShowModal(!showModal)}
          className="mb-5 mt-4 w-1/2 h-12 text-lg text-blue-500 border border-blue-500 transform transition duration-500 ease-in-out hover:bg-blue-500  hover:text-slate-50 rounded-lg"
        >
          Create New Category
        </button>
        {showModal ? <CreateCategory setShowModal={setShowModal} /> : null}
        {showModal2 ? (
          <UpdateCategory
            categoryID={selectedCategoryId}
            setShowModal={setShowModal2}
          />
        ) : null}
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {categorys && categorys.length > 0 && (
              <p className="font-poppins text-lg text-yellow-700 text-center">
                Are you sure do you really want to delete the
                <span className="text-xl mx-1 font-semibold">
                  {selectedCategoryName}
                </span>
                category
              </p>
            )}
            <div className="flex justify-around">
              <button
                onClick={handleDelete}
                className="font-poppins mt-3 w-auto h-7 px-3 rounded-md bg-transparent text-red-500 hover:border border-red-500"
              >
                Delete
              </button>
              <button
                onClick={handleClose}
                className="font-poppins mt-3 w-auto h-7 px-2 rounded-md bg-transparent text-blue-500 hover:border border-blue-500"
              >
                Cancel
              </button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Categories;
