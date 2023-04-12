import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import { usersDeleteApi, usersGetApi } from "../../../../Store/AdminSlice";
import { RiDeleteBin3Fill } from "react-icons/ri";

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
    fontFamily: "poppins",
    fontSize: 18,
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

const Users = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState();
  const { users } = useSelector((state) => state.adminWork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersGetApi({ page, pageLimit }));
  }, [page]);

  const userCollection = users?.result;
  console.log(userCollection);

  const count = users?.total;
  const pageLimit = 5; // page limit

  const totalPages = Math.ceil(count / pageLimit);

  const handleChange = (e, value) => {
    setPage(value);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userID = data?.userId;
  const handleDelete = () => {
    dispatch(usersDeleteApi(userID)).then(() => {
      dispatch(usersGetApi({ page, pageLimit }));
    });
  };

  return (
    <div className="w-full p-5 font-poppins bg-slate-50 min-h-screen">
      <div className="flex flex-col items-center p-20">
        <h1 className="mb-2 text-slate-800 text-3xl font-bold">User Details</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Mobile No.</StyledTableCell>
                <StyledTableCell align="right">UserName</StyledTableCell>
                <StyledTableCell align="right">Photo</StyledTableCell>
                <StyledTableCell align="right">Role</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userCollection?.map((user, key) => (
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    {user?.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user?.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user?.mobileNo}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {user?.username}
                  </StyledTableCell>
                  <StyledTableCell sx={{display:"flex",justifyContent:"end"}}>
                    <img className="w-10 h-10 aspect-[3/2] object-cover rounded-full" src={user?.photos[0]?.url} alt="photo" />
                  </StyledTableCell>
                  <StyledTableCell align="right">{user?.role}</StyledTableCell>
                  <StyledTableCell sx={{display:"flex",justifyContent:"end"}}>
                    <button
                      onClick={() => {
                        handleOpen();
                        setData({
                          ...data,
                          userId: user?._id,
                          userName: user?.name,
                        });
                      }}
                      className="w-auto px-3 h-8 text-red-700 text-2xl flex justify-center items-center rounded-full transform transition duration-500 ease-in-out hover:bg-red-700 hover:text-slate-50"
                    >
                      <RiDeleteBin3Fill />
                    </button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Pagination */}
        <Stack spacing={2} marginTop={2}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            color="primary"
          />
        </Stack>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            {userCollection && userCollection.length > 0 && (
              <p className="font-poppins text-lg text-yellow-700 text-center">
                Are you sure do you really want to delete
                <span className="text-xl mx-1 font-semibold">
                  {data?.userName}
                </span>
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
};

export default Users;
