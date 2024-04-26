// import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import useUser from "../../hooks/useUser";
import { useState } from "react";
import { useEffect } from "react";
import { Collapse, IconButton } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { Box } from "@mui/system";

const columns = [
  { id: "details_user", label: "Detalles", align: "center"},
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

export function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { data } = useUser();
  const [users, setUsers] = useState([]);
  const [openRows, setOpenRows] = useState({});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const toggleRowDetails = (userId) => {
    setOpenRows((prevOpenRows) => ({
      ...prevOpenRows,
      [userId]: !prevOpenRows[userId],
    }));
  };

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
                    maxWidth: column.maxWidth,
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
            {users?.map((row) => (
              <React.Fragment key={row.id}>
                <TableRow hover tabIndex={-1}>
                  {columns.map((column) => {
                    if (column.id === "details_user") {
                      return (
                        <TableCell key={column.id} align="center">
                          <IconButton
                            aria-label="toggle row details"
                            onClick={() => toggleRowDetails(row.id)}
                            color="secondary"
                          >
                            <InfoIcon />
                          </IconButton>
                        </TableCell>
                      );
                    } else {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    }
                  })}
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={columns.length}
                  >
                    <Collapse
                      in={openRows[row.id]}
                      timeout="auto"
                      unmountOnExit
                    >
                      {/* Contenido de los detalles del usuario */}
                      <Box padding={2}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta neque maxime dolorum vero odit repellat
                        voluptatem aliquid temporibus dolor animi quae tempore,
                        numquam, laboriosam itaque asperiores quis nostrum,
                        natus ullam!
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={users?.length || 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
