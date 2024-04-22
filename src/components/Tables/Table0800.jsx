import { filter } from "lodash";
import { sentenceCase } from "change-case";
import { useState } from "react";
// @mui
import {
  Card,
  Table,
  Stack,
  Paper,
  Button,
  Popover,
  TableRow,
  MenuItem,
  TableBody,
  TableCell,
  Container,
  Typography,
  IconButton,
  TableContainer,
  TablePagination,
} from "@mui/material";
// components
import Label from "../Label";
import Iconify from "../Iconify";
// import Scrollbar from "../ScrollBar/index";
// sections
import { UserListHead, UserListToolbar } from "../../sections/user";
// mock
import USERLIST from "../../_mock/user";
import SimpleBar from "simplebar-react";
import { Link } from "react-router-dom";


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

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(
      array,
      (_user) => _user.caseId.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  }
  return stabilizedThis.map((el) => el[0]);
}

// eslint-disable-next-line react/prop-types
export function Table0800({
  dataHeadTable,
  dataTitle,
  pathToForm,
  handleOpenModal,
}) {
  const [open, setOpen] = useState(null);

  const [page, setPage] = useState(0);

  const [order, setOrder] = useState("asc");

  const [orderBy, setOrderBy] = useState("name");

  const [filterName, setFilterName] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [selectedCaseId, setSelectedCaseId] = useState(null);

  const handleOpenMenu = (event, caseId) => {
    setOpen(event.currentTarget);
    setSelectedCaseId(caseId);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);

    if (property === "caseId") {
      filteredUsers.sort((a, b) => {
        return (a.caseId - b.caseId) * (order === "asc" ? 1 : -1);
      });
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleFilterByName = (event) => {
    setPage(0);
    setFilterName(event.target.value);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - USERLIST.length) : 0;

  const filteredUsers = applySortFilter(
    USERLIST,
    getComparator(order, orderBy),
    filterName
  );

  const isNotFound = !filteredUsers.length && !!filterName;

  const filteredUsersReverse = [...filteredUsers].reverse();

  return (
    <>
      <Container
        sx={{
          width: "100%",
          marginTop: "40px",
          left: { xs: "50px", sm: "80px", md: "120px", lg: "200px" },
        }}
      >
        <Typography variant="h4" gutterBottom align="center">
          {dataTitle}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={1}
        >
          <Link to={pathToForm}>
            <Button
              variant="contained"
              startIcon={<Iconify icon="eva:plus-fill" />}
             color={"primary"}
            >
              Nuevo Registro
            </Button>
          </Link>
        </Stack>

        <Card>
          <UserListToolbar
            // numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
          />

          <SimpleBar style={{ height: "550px", overflowY: "visible" }}>
            <TableContainer sx={{ width: "inherit" }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={dataHeadTable}
                  rowCount={USERLIST.length}
                  // numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                />
                <TableBody>
                  {filteredUsersReverse
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      const { caseId, date, location, user } = row;

                      return (
                        <TableRow hover key={caseId} tabIndex={-1}>
                          <TableCell
                            component="th"
                            scope="row"
                            padding="normal"
                          >
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {caseId}
                              </Typography>
                            </Stack>
                          </TableCell>

                          <TableCell align="left">{date}</TableCell>

                          <TableCell align="left">{location}</TableCell>

                          <TableCell align="left">{user}</TableCell>

                          <TableCell align="left">
                            <Label
                              color={
                                (status === "banned" && "error") || "success"
                              }
                            >
                              {sentenceCase(status)}
                            </Label>
                          </TableCell>

                          <TableCell align="right">
                            <IconButton
                              size="large"
                              color="inherit"
                              onClick={(event) => handleOpenMenu(event, caseId)}
                            >
                              <Iconify icon={"eva:more-vertical-fill"} />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
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
              count={USERLIST.length}
              component={"div"}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[]}
              page={page}
              onPageChange={handleChangePage}
              sx={{
                display: "flex",
                justifyContent: { md: "flex-end", sm: "flex-start" },
              }}
            />
          </SimpleBar>
        </Card>
      </Container>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            width: 140,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <MenuItem
          onClick={() => {
            handleOpenModal(selectedCaseId);
          }}
        >
          <Iconify icon={"eva:eye-fill"} sx={{ mr: 2 }}></Iconify>
          Ver detalles
        </MenuItem>

        <Link to={`/PageForm0800Edit/${selectedCaseId}`}>
          <MenuItem>
            <Iconify icon={"eva:edit-fill"} sx={{ mr: 2 }} />
            Editar
          </MenuItem>
        </Link>

        <MenuItem sx={{ color: "error.main" }}>
          <Iconify icon={"eva:trash-2-outline"} sx={{ mr: 2 }} />
          Eliminar
        </MenuItem>
      </Popover>
    </>
  );
}
