// import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import { useEffect } from "react";

const columns = [
  { id: "identity_card", label: "Cédula", minWidth: 170, align: "center" },
  { id: "username", label: "Usuario", minWidth: 100, align: "center" },
  {
    id: "department",
    label: "Departamento",
    minWidth: 170,
    align: "center",
  },
  {
    id: "role",
    label: "Rol de usuario",
    minWidth: 170,
    align: "center",
  },
];

// const data = [
//   {
//     id: 1,
//     cedula: 27451286,
//     userName: "Jhon",
//     department: "OSTI",
//     role: "Administrador",
//     status: "Activo",
//     names: "",
//     lastNames: "",
//     phone: "",
//     email: "",
//     gender: "",
//   },
// ]

export function UserTable() {
  // const [page, setPage] = useState(0);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data } = useUser();
  const [users, setUsers] = useState([]);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };

  useEffect(() => {
    setUsers(data);
  }, [data]);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#2E219E",
                    color: "white",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </Paper>
  );
}
