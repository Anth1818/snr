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

  const { getUserById } = useUser();

  const { data, isSuccess, isLoading } = getUserById;

  let initialValueEditUser= {};
  

  if (isSuccess && data) {
    initialValueEditUser = {
      identity_card: data?.identity_card,
      names: data?.names,  
      last_names: data?.last_names, 
      is_foreign: data?.is_foreign,
      email: data?.email, 
      phone: data?.phone, 
      gender_id: data?.gender_id,
      state_id: data?.state_id,
      municipality_id: data?.municipality_id,
      parish_id: data?.parish_id,
      department_id: data?.department_id,
      role_id: data?.role_id,
      address:data?.address,
      resetPassword: false,
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
                  {isLoading && <p>Cargando...</p>}
                  {isSuccess && (
                    <Formik
                      initialValues={initialValueEditUser}
                      validationSchema={validationSchemaEditUser}
                      onSubmit={(values) => {
                        console.log(values);
                      }}
                    >
                      {(props) => (
                        <FormUser
                          props={props}
                          initialValuesEdit={initialValueEditUser}
                          isEdit={true}
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
      {/* {showAlertSuccess && (
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
      )} */}
    </Box>
  );
}
