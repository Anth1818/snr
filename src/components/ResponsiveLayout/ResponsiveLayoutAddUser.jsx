import { CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import { validationSchemaAddUser } from "../../utils/validationsSchemas/validationSchemaAddUser";
import { initialValuesNewUser } from "../../utils/initialValues/initialValuesNewUser";
import FormAddNewUser from "../Forms/FormAddNewUser/FormAddNewUser";
import useAddUser from "../../hooks/useAddUser";

export default function ResponsiveLayoutAddUser() {
  const addUserMutation = useAddUser();
  
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
    </Box>
  );
}
