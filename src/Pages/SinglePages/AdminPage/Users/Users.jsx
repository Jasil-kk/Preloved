import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { usersGetApi } from "../../../../Store/AdminSlice";

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
  const { users } = useSelector((state) => state.adminWork);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersGetApi());
  }, [dispatch]);

  const userCollection = users?.result;
  console.log(userCollection);

  return (
    <div className="w-full p-5 font-poppins">
      <div className="flex flex-col items-center p-20">
        <h1 className="mb-2 text-3xl font-bold">User Details</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Mobile No.</StyledTableCell>
                <StyledTableCell align="right">UserName</StyledTableCell>
                <StyledTableCell align="right">Role</StyledTableCell>
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
                  <StyledTableCell align="right">{user?.role}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* Pagination */}
        <Stack spacing={2} marginTop={2}>
          <Pagination count={10} color="primary" />
        </Stack>
      </div>
    </div>
  );
};

export default Users;
