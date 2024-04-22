import { Button, CssBaseline, Toolbar, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import {UserTable} from "../Tables/UserTable";
import { useState } from "react";
import ModalDetails from "../modal/modal";
import { Link } from "react-router-dom";
import Iconify from "../Iconify";

// eslint-disable-next-line react/prop-types
export default function ResponsiveLayout0800({ dataHeadTable }) {
  const [open, setOpen] = useState(false);
  const [caseId, setCaseId] = useState("");
  const handleOpenModal = (caseId) => { setOpen(true); setCaseId(caseId) };
  const handleCloseModal = () => setOpen(false);
 

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Usuarios"}></RenderDrawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Listado de usuarios
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          mb={4}
        >
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
        <UserTable></UserTable>
          <ModalDetails open={open} handleCloseModal={handleCloseModal} caseId={caseId}></ModalDetails>
        </Container>
      </Box>
    </Box>
  );
}