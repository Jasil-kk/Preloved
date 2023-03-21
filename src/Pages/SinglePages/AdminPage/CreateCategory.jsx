import React from "react";
import { CgClose } from "react-icons/cg";

const CreateCategory = ({ setShowModal }) => {
  return (
    <>
      <div className="fixed flex justify-center items-center inset-0 z-50 outline-none focus:outline-none">
        <div className="w-96 h-auto bg-slate-50 m-5 pt-8 rounded-lg relative">
          <span
            onClick={() => setShowModal(false)}
            className="absolute top-2 right-2 text-2xl text-slate-900 cursor-pointer"
          >
            <CgClose />
          </span>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default CreateCategory;
