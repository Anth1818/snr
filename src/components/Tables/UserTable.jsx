// import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Collapse, IconButton, Typography, } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import React from "react";
import { Box, Stack, } from "@mui/system";
import { filter } from "lodash";
import { Link } from "react-router-dom";
import { UserListToolbar } from "../../sections/user";
import Iconify from "../Iconify";

const columns = [
  { id: "details_user", label: "Detalles", align: "center" },
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

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}



export function UserTable({data, titlePage}) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [users, setUsers] = useState([]);
  const [openRows, setOpenRows] = useState({});
  const [filterName, setFilterName] = useState("");
  const [orderBy, setOrderBy] = useState("name");
  const [order, setOrder] = useState("asc");

  function applySortFilter(array, comparator, query) {

    const stabilizedThis = array?.map((el, index) => [el, index]);
    stabilizedThis?.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    if (query) {
      return filter(
        stabilizedThis,
        (_user) => _user[0]?.identity_card.toString().indexOf(query) !== -1
      ).map((el) => el[0]);
    }
    return stabilizedThis?.map((el) => el[0]);
  }
  
  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

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
  

  const filteredUsers = applySortFilter(
    data,
    getComparator(order, orderBy),
    filterName
  );
  const isNotFound = !filteredUsers?.length && !!filterName;

  // const filteredUsersReverse = [...filteredUsers].reverse();

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      <Stack
          direction="row"
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          px={3}
          pt={3}
        >
          <Typography variant="h4" gutterBottom align="center">
          {titlePage}
        </Typography>
          <Link to={"../AddUser"}>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
             color={"primary"}
            >
              Agregar nuevo usuario
            </Button>
          </Link>
        </Stack>
      
        <UserListToolbar
            // numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            searchLabel="Buscar por cédula"
          />
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
            {filteredUsers?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
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
                      <Box padding={3}
                        sx={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", gap: "20px" }}>

                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%", flexWrap: "wrap", gap: "10px" }} >
                          <div>
                            <b>Nombre completo:</b> {row.names} {row.last_names} 
                            
                          </div>
                          <div>
                            <b>Telefono:</b> {row.phone === "" ? "Sin datos" : row.phone}
                          </div>
                          <div>
                            <b>Correo:</b> {row.email === "" ? "Sin datos" : row.email}
                          </div>
                          <div>
                            <b>Genero:</b> {row.gender === "" ? "Sin datos" : row.gender}
                          </div>
                          <div>
                            <b>Dirreción:</b> {row.address === undefined ? "Caracas - el Valle - Libertador - calle 6 " : row.address}
                          </div><div>
                            <b>Estatus:</b> {row.is_active ? "Activo " : "Inactivo"}
                          </div>
                        </Box>
                        <Box sx={{ display: "flex", justifyContent: "center", alignContent: "center", width: "100%", gap: "10px" }}>
                          <Link to={`/EditUser/${row.id}`} style={{ textDecoration: "none" }}>
                            <Button variant="contained" color={"secondary"}>Editar</Button>
                          </Link>
                          <Button variant="contained" color={"error"}>Eliminar</Button>
                        </Box>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
          {isNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <Paper
                          sx={{
                            textAlign: "center",
                          }}
                        >
                          <Typography variant="h6" paragraph>
                            No encontrado
                          </Typography>

                          <Typography variant="body2">
                            No hay resultados para &nbsp;
                            <strong>&quot;{filterName}&quot;</strong>.
                          </Typography>
                        </Paper>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
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
