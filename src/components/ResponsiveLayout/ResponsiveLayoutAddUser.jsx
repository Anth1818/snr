import { CssBaseline, Grid, Paper, Snackbar, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import { validationSchemaAddUser } from "../../utils/validationsSchemas/validationSchemaAddUser";
import { initialValuesNewUser } from "../../utils/initialValues/initialValuesNewUser";
import FormAddNewUser from "../Forms/FormAddNewUser/FormAddNewUser";
import useAddUser from "../../hooks/useAddUser";
import React from "react";
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export default function ResponsiveLayoutAddUser() {
  const {addUserMutation, showAlert, setShowAlert} = useAddUser();
  
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
      {showAlert && <Snackbar open={showAlert} autoHideDuration={4000} onClose={() => setShowAlert(false)}>
        <Alert severity="success" sx={{ width: '100%' }}>
          Registro exitoso
        </Alert>
      </Snackbar>}
    </Box>
  );
}
