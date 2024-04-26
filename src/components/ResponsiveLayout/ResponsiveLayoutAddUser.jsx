import { CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import { validationSchemaAddUser } from "../../utils/validationsSchemas/validationSchemaAddUser";
import { initialValuesNewUser } from "../../utils/initialValues/initialValuesNewUser";
import FormAddNewUser from "../Forms/FormAddNewUser/FormAddNewUser";
import useUser from "../../hooks/useUser";
import Notification from "../Notifications/Notification";


export default function ResponsiveLayoutAddUser() {
  const {addUserMutation, showAlertSuccess, setShowAlertSuccess, showAlertError, setShowAlertError, errorMessage} = useUser();
  
  const handleSubmit = async (values) => {
      try {
      await addUserMutation.mutate(values);
    } catch (error) {
      console.error("error", error);
    }
  };

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
                  <Typography component="p" align="center" fontSize="12px">
                    Los campos con * son requeridos
                  </Typography>
                </Box>
                <Box>
                  <Formik
                    initialValues={initialValuesNewUser}
                    validationSchema={validationSchemaAddUser}
                    onSubmit={(values)=>{
                      handleSubmit(values)
                    }}
                  >
                    {(props) => (
                      <FormAddNewUser
                        props={props}
                        initialValues={initialValuesNewUser}
                      ></FormAddNewUser>
                    )}
                  </Formik>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {showAlertSuccess && <Notification openNotification={showAlertSuccess} closeNotification={() => setShowAlertSuccess(false)} message={"Registro exitoso"} severity={"success"}/>}
      {showAlertError && <Notification openNotification={showAlertError} closeNotification={() => setShowAlertError(false)} message={errorMessage} severity={"error"}/>}
    </Box>
  );
}
