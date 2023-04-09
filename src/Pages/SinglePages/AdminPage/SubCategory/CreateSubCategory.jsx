import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { subCategoryApi } from "../../../../Store/AdminSlice";
import { getSubCategoryApi } from "../../../../Store/GetCategorySlice";

const CreateSubCategory = ({ categoryID, setShowModal }) => {
  const [input, setInput] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    setInput({ ...input, categoryId: categoryID });
  }, []);
  const handleSubmit = () => {
    dispatch(subCategoryApi(input)).then(() => {
      dispatch(getSubCategoryApi(categoryID));
    });
  };
  console.log(input);
  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none font-poppins">
        <div className="w-[500px] p-7 h-auto flex flex-col items-center bg-slate-50 m-5 pt-8 rounded-lg relative">
          <span
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 text-2xl text-slate-900 cursor-pointer"
          >
            <CgClose />
          </span>
          <p className="text-xl text-center text-slate-500 mb-5">
            Type a Sub-category you want to add
          </p>
          <TextField
            className="w-full"
            id="outlined-basic"
            label="Category"
            variant="outlined"
            onChange={(e) =>
              setInput({ ...input, subcategoryName: e.target.value })
            }
          />
          <button
            onClick={() => {
              handleSubmit();
              setShowModal(false);
            }}
            className="w-auto mt-4 px-4 h-10 bg-blue-500 text-slate-50 rounded-md"
          >
            Add
          </button>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreateSubCategory;
