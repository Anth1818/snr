import { CssBaseline, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import UserTable from "../UserTable";

// eslint-disable-next-line react/prop-types
export default function ResponsiveLayoutRCV({ dataHeadTable }) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Registro de casos de violencia"}></RenderDrawer>
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
            dataTitle={"Lista de mujeres registradas"}
          ></UserTable>
        </Container>
      </Box>
    </Box>
  );
}
