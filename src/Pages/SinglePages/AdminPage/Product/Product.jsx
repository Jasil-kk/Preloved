import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePostApi, getPostApi } from "../../../../Store/AdminSlice";
import { BsFillEyeFill } from "react-icons/bs";
import { RiDeleteBin3Fill } from "react-icons/ri";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

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
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 18,
    fontFamily:"poppins"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    fontFamily:"poppins"
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  }
}));

const Product = () => {
  const [open, setOpen] = useState(false);
  const [selectedProductName, setSelectedProductName] = useState("");
  const [selectedProductId, setSelectedProductId] = useState("");



  const { getPost } = useSelector((state) => state.adminWork);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostApi());
  }, [dispatch]);

  const products = getPost?.product;

  console.log(products);

  const handleDelete = () => {
    dispatch(deletePostApi(selectedProductId));
  };

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="w-full min-h-screen bg-slate-300 flex items-center flex-col font-poppins">
      <h1 className="mt-5 text-4xl font-extrabold">Admin Dashboard</h1>
      <div className="w-auto h-auto bg-slate-50 mt-8 p-5 flex flex-col items-center rounded-md">
        <h2 className="text-3xl my-5 font-bold">Products</h2>
        {products?.length > 0 ? (
          <>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell
                      >
                        User
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                      >
                        Category
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                      >
                        SubCategory
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                      >
                        Action
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  {products?.map((product,key) => (
                  <TableBody key={key}>
                    <StyledTableRow>
                      <StyledTableCell
                        component="th"
                        scope="row"
                      >
                        {product?.userId?.name}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                      >
                        {product?.categoryId?.categoryName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                      >
                        {product?.subcategoryId?.subcategoryName}
                      </StyledTableCell>
                      <StyledTableCell
                        align="right"
                        style={{ display: "flex", gap: "10px" }}
                      >
                        <button
                          onClick={() => {
                            setOpen(true);
                            setSelectedProductName(product?.categoryId?.categoryName);
                            setSelectedProductId(product?._id)
                          }}
                          className="w-auto p-4 h-6 text-red-700 text-2xl flex justify-center items-center rounded-full transform transition duration-500 ease-in-out hover:bg-red-700 hover:text-slate-50"
                        >
                          <RiDeleteBin3Fill />
                        </button>
                        <Link to={`/dashboard/product/${product?._id}`}>
                          <button className="w-auto p-4 h-6 flex items-center text-2xl rounded-md  text-blue-700 transform transition duration-500 ease-in-out hover:bg-blue-700 hover:text-slate-50">
                            <BsFillEyeFill />
                          </button>
                        </Link>
                      </StyledTableCell>
                    </StyledTableRow>
                  </TableBody>
            ))}
                </Table>
              </TableContainer>
            {/* pagination */}
            <Stack marginTop={3} spacing={2}>
              <Pagination count={10} color="secondary" />
            </Stack>
          </>
        ) : (
          <h4 className="text-xl mt-5 text-red-700 ">No Products found</h4>
        )}
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {products && products.length > 0 && (
              <p className="font-poppins text-lg text-yellow-700 text-center">
                Are you sure do you really want to delete the
                <span className="text-xl mx-1 font-semibold">
                {selectedProductName}
                </span>
                product
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

export default Product;
