import { CssBaseline, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import UserTable from "../UserTable";
import { useState } from "react";
import ModalDetails from "../modal/modal";

// eslint-disable-next-line react/prop-types
export default function ResponsiveLayout0800({ dataHeadTable }) {
  const [open, setOpen] = useState(false);
  const [caseId, setCaseId] = useState("");
  const handleOpenModal = (caseId) => { setOpen(true); setCaseId(caseId) };
  const handleCloseModal = () => setOpen(false);
 

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"0800"}></RenderDrawer>
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
          <UserTable
            dataHeadTable={dataHeadTable}
            dataTitle={"Lista de llamadas"}
            pathToForm={"/Pages/PageForm0800"}
            handleOpenModal={handleOpenModal}
          ></UserTable>
          <ModalDetails open={open} handleCloseModal={handleCloseModal} caseId={caseId}></ModalDetails>
        </Container>
      </Box>
    </Box>
  );
}
