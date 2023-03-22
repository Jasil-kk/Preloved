import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubCategoryApi } from "../../../../Store/GetCategorySlice";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin3Fill } from "react-icons/ri";
import CreateSubCategory from "../SubCategory/CreateSubCategory";
import UpdateSubCategory from "../SubCategory/UpdateSubCategory";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { deleteSubCategoryApi } from "../../../../Store/AdminSlice";

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

const CatSingleView = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedSubCategoryName, setSelectedSubCategoryName] = useState("");

  const { allSubCategory } = useSelector((state) => state.allCategory);

  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubCategoryApi(categoryID));
  }, [dispatch]);

  const categoryName = params.name;
  const categoryID = params.id;
  console.log(categoryName);
  console.log(categoryID);

  const subCategorys = allSubCategory?.subcategory;

  console.log(subCategorys);

  const handleDelete = () => {
    dispatch(deleteSubCategoryApi(selectedCategoryId));
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="w-full min-h-screen bg-slate-300 flex justify-center items-start font-poppins">
      <div className="w-1/2 mt-20 h-auto p-5 bg-slate-50 flex flex-col items-center rounded-xl">
        <h1 className="text-4xl font-bold">{categoryName}</h1>
        <h2 className="text-2xl font-semibold mt-7">Sub Categories</h2>
        {subCategorys?.length > 0 ? (
          <>
            {subCategorys?.map((subcategory, key) => (
              <div
                key={key}
                className="w-full mt-5 flex justify-center items-center"
              >
                <div className="w-1/2 h-12 p-3 rounded-md bg-slate-900 flex items-center justify-center">
                  <h3 className="text-xl text-slate-50">
                    {subcategory?.subcategoryName}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    setSelectedCategoryId(subcategory?._id);
                    setShowModal2(true);
                  }}
                  className="w-12 ml-2 h-12 bg-green-600 text-slate-50 text-2xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-green-700"
                >
                  <MdEdit />
                </button>
                <button
                  onClick={() => {
                    setSelectedCategoryId(subcategory?._id);
                    setSelectedSubCategoryName(subcategory?.subcategoryName);
                    setOpen(true);
                  }}
                  className="w-12 ml-2 h-12 bg-red-600 text-slate-50 text-2xl flex justify-center items-center rounded-md transform transition duration-500 ease-in-out hover:bg-red-700"
                >
                  <RiDeleteBin3Fill />
                </button>
              </div>
            ))}
          </>
        ) : (
          <h4 className="text-lg mt-5 text-red-700">No sub-categories found</h4>
        )}
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 w-64 h-12 text-lg text-blue-500 border border-blue-500 transform transition duration-500 ease-in-out hover:bg-blue-500  hover:text-slate-50 rounded-lg"
        >
          Add New Sub-Category
        </button>
        {showModal ? (
          <CreateSubCategory
            categoryID={categoryID}
            setShowModal={setShowModal}
          />
        ) : null}
        {showModal2 ? (
          <UpdateSubCategory
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
              {subCategorys && subCategorys.length > 0 && (
                <p className="font-poppins text-lg text-yellow-700 text-center">
                  Are you sure do you really want to delete the
                  <span className="text-xl mx-1 font-semibold">
                    {selectedSubCategoryName}
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
  );
};

export default CatSingleView;
