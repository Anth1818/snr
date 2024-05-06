import { CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import validationSchemaEditUser from "../../utils/validationsSchemas/validationSchemaEditUser";
import { initialValuesEditUser } from "../../utils/initialValues/initialValuesEditUser";
import FormUser from "../Forms/FormUser/FormUser";
import useUser from "../../hooks/useUser";
import Notification from "../Notifications/Notification";
// import { useEffect } from "react";

export default function ResponsiveLayoutEditUser() {
  const {
    showAlertSuccess,
    setShowAlertSuccess,
    showAlertError,
    setShowAlertError,
    errorMessage,
    isPendingUserEdit,
  } = useUser();
  const { getUserById } = useUser();

  const { data, isSuccess } = getUserById;
    console.log(data)

  let initialValueUser = {};

  if (isSuccess) {
    initialValueUser = {
      user: { columns: ["identity_card"], values: [] },
      location: { columns: [], values: [] },
      resetPassword: false
    };
  }

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Editar usuario"}></RenderDrawer>
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
                    Editar usuario
                  </Typography>
                  <Typography component="p" align="center" fontSize="12px">
                    Los campos con * son requeridos
                  </Typography>
                </Box>
                <Box>
                  {!isSuccess && <p>Cargando...</p>}
                  {isSuccess && (
                    <Formik
                      initialValues={initialValueUser}
                      validationSchema={validationSchemaEditUser}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {(props) => (
                        <FormUser
                          props={props}
                          initialValuesEdit={initialValueUser}
                          isEdit={true}
                          pending={isPendingUserEdit}
                        ></FormUser>
                      )}
                    </Formik>
                  )}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {showAlertSuccess && (
        <Notification
          openNotification={showAlertSuccess}
          closeNotification={() => setShowAlertSuccess(false)}
          message={"Registro exitoso"}
          severity={"success"}
        />
      )}
      {showAlertError && (
        <Notification
          openNotification={showAlertError}
          closeNotification={() => setShowAlertError(false)}
          message={errorMessage}
          severity={"error"}
        />
      )}
    </Box>
  );
}
