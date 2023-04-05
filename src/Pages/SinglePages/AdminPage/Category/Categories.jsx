import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MdEdit } from "react-icons/md";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin3Fill } from "react-icons/ri";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryApi } from "../../../../Store/GetCategorySlice";
import { deleteCategoryApi } from "../../../../Store/AdminSlice";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreateCategory from "./CreateCategory";
import UpdateCategory from "./UpdateCategory";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1ca7e8",
    color: theme.palette.common.white,
    fontSize: 18,
    fontFamily: "poppins",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontFamily: "poppins",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Categories() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [page, setPage] = useState(1);

  const { allCategory } = useSelector((state) => state.allCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoryApi({ page, pageLimit }));
  }, [page]);

  const count = allCategory?.total;

  const pageLimit = 5; // page limit

  const totalPages = Math.ceil(count / pageLimit);

  const categorys = allCategory?.category;
  console.log(categorys);

  const handleDelete = () => {
    dispatch(deleteCategoryApi(selectedCategoryId)).then(() => {
      dispatch(getCategoryApi({ page, pageLimit }));
    });
  };
  const handleChange = (e, value) => {
    setPage(value);
  };
  console.log(selectedCategoryId);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full min-h-screen px-40 py-12 bg-slate-50 flex items-center flex-col font-poppins">
      <h2 className="text-3xl font-bold">Categories</h2>
      <button
        onClick={() => setShowModal(!showModal)}
        className="ml-auto mb-2 w-auto px-4 h-12 text-lg bg-blue-500 border text-slate-50 transform transition duration-500 ease-in-out hover:bg-blue-700  hover:text-slate-50 rounded-lg"
      >
        Create New Category
      </button>
      {categorys?.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Category</StyledTableCell>
                  <StyledTableCell align="right">Actions</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {categorys?.map((category, key) => (
                  <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">
                      {category?.categoryName}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ display: "flex", gap: "5px" }}
                    >
                      <button
                        onClick={() => {
                          setSelectedCategoryId(category._id);
                          setSelectedCategoryName(category.categoryName);
                          handleOpen();
                        }}
                        className="w-auto px-3 h-8 text-red-600 text-xl flex justify-center items-center rounded-full transform transition duration-500 ease-in-out hover:bg-red-600 hover:text-slate-50"
                      >
                        <RiDeleteBin3Fill />
                      </button>

                      <button
                        onClick={() => {
                          setSelectedCategoryId(category._id);
                          setSelectedCategoryName(category.categoryName);
                          setShowModal2(true);
                        }}
                        className="w-auto px-3 h-8 text-green-600 text-xl flex justify-center items-center rounded-full transform transition duration-500 ease-in-out hover:bg-green-600 hover:text-slate-50"
                      >
                        <MdEdit />
                      </button>
                      <Link
                        to={`/dashboard/categories/${category?.categoryName}/${category?._id}`}
                      >
                        <button className="w-auto px-3 h-8 flex text-xl items-center rounded-full text-blue-600 transform transition duration-500 ease-in-out hover:bg-blue-600 hover:text-slate-50">
                          <BsFillEyeFill />
                        </button>
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Stack marginTop={3} spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              color="primary"
              onChange={handleChange}
            />
          </Stack>
        </>
      ) : (
        <h4 className="text-xl mb-5 text-red-700">No categories found</h4>
      )}
      <div>
        {showModal ? (
          <CreateCategory
            setShowModal={setShowModal}
            pageLimit={pageLimit}
            page={page}
          />
        ) : null}
        {showModal2 ? (
          <UpdateCategory
            categoryID={selectedCategoryId}
            setShowModal={setShowModal2}
            selectedCategoryName={selectedCategoryName}
            pageLimit={pageLimit}
            page={page}
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
                onClick={() => {
                  handleDelete();
                  handleClose();
                }}
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
}
