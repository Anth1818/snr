import { CssBaseline, Grid, Paper, Toolbar } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import FormOAC from "../Forms/FormOAC/FormOAC";
import { Formik } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import { initialValues } from "../../utils/initialValues";

export default function ResponsiveLayoutOAC() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"OAC"}></RenderDrawer>
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
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  // onSubmit={(values) => {
                  //   handleSubmit(values); // Llama a tu función de manejo de envío
                  //   setShowAlert(true); // Mostrar el Alert al enviar el formulario
                  //   setDisableButton(true);
                  //   setTimeout(() => {
                  //     setDisableButton(false);
                  //     location.href = "/pages/Page0800"; // Redireccionar después del tiempo especificado
                  //   }, 2500);
                  // }}
                >
                  {(props) => <FormOAC props={props}></FormOAC>}
                </Formik>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
