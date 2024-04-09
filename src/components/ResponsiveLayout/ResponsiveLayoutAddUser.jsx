import {
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik, } from "formik";
import { validationSchemaAddUser } from "../../utils/validationSchemaAddUser";
import { initialValuesNewUser } from "../../utils/initialValuesNewUser";
import FormAddNewUser from "../Forms/FormAddNewUser/FormAddNewUser";
export default function ResponsiveLayoutAddUser() {

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Agregar usuario"}></RenderDrawer>
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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 10 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box>
                  <Typography variant="h3" component="h2" align="center">
                    Agregar nuevo usuario
                  </Typography>
                </Box>
                <Box>
                  <Formik
                    initialValues={initialValuesNewUser}
                    validationSchema={validationSchemaAddUser}
                    onSubmit={""}
                  >
                    {(props) => (
                      <FormAddNewUser props={props} initialValues={initialValuesNewUser}></FormAddNewUser>
                    )}
                  </Formik>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
