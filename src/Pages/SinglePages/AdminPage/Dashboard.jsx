import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoryApi } from "../../../Store/GetCategorySlice";
import CreateCategory from "./Category/CreateCategory";
import { MdEdit } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin3Fill } from "react-icons/ri";
import UpdateCategory from "./Category/UpdateCategory";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { deleteCategoryApi } from "../../../Store/AdminSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ffe600",
  boxShadow: 24,
  p: 2,
};

const Dashboard = () => {
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
    <div className="w-full min-h-screen bg-slate-300 flex items-center flex-col font-poppins">
      <h1 className="mt-5 text-4xl font-extrabold">Admin Dashboard</h1>
      <div className="w-1/2 h-auto bg-slate-50 mt-8 flex flex-col items-center rounded-md">
        <h2 className="text-3xl mt-5 font-bold">Categories</h2>
        <div className="mt-8 w-[70%] flex flex-col items-center">
          {categorys?.length > 0 ? (
            <>
              {categorys?.map((category, key) => (
                <div key={key} className="w-full pb-6 flex items-center">
                  <div className="w-full h-14 bg-slate-900 p-3 border border-slate-400 flex items-center justify-between">
                    <h3 className="text-xl text-slate-50">
                      {category?.categoryName}
                    </h3>
                    <Link to={`/categorysingleView/${category?.categoryName}/${category?._id}`}>
                      <button className="w-auto p-4 h-6 flex items-center rounded-md bg-blue-600 text-slate-50 transform transition duration-500 ease-in-out hover:bg-blue-700">
                        <BsFillEyeFill />
                      </button>
                    </Link>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCategoryId(category._id);
                      setShowModal2(true);
                    }}
                    className="w-14 ml-2  h-12 bg-green-600 text-slate-50 text-2xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-green-700"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategoryId(category._id);
                      setSelectedCategoryName(category.categoryName);
                      setOpen(true);
                    }}
                    className="w-14 ml-2  h-12 bg-red-600 text-slate-50 text-2xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-red-700"
                  >
                    <RiDeleteBin3Fill />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <h4 className="text-xl mb-5 text-red-700">
              No categories found
            </h4>
          )}
          <button
            onClick={() => setShowModal(true)}
            className="mb-5 w-1/2 h-12 text-lg text-blue-500 border border-blue-500 transform transition duration-500 ease-in-out hover:bg-blue-500  hover:text-slate-50 rounded-lg"
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
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                {categorys && categorys.length > 0 && (
                  <p className="font-poppins text-lg text-yellow-700 text-center">
                    Are you sure do you really want to delete the
                    <span className="text-xl mx-1 font-semibold">
                      {selectedCategoryName}
                    </span>
                    category
                  </p>
                )}
              </Typography>
              <button
                onClick={handleDelete}
                className="ml-72 mt-3 w-auto h-8 px-3 rounded-md bg-red-500 text-slate-50"
              >
                Delete
              </button>
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
