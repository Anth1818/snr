import { CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import validationSchemaEditUser from "../../utils/validationsSchemas/validationSchemaEditUser";
import FormUser from "../Forms/FormUser/FormUser";
import config from "../../utils/config";
import Notification from "../Notifications/Notification";
import { useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api/API_SNR";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import { useEffect } from "react";

export default function ResponsiveLayoutEditUser() {
  const [updateSuccessMsg, setUpdateSuccessMsg] = useState("")
  const { userId } = useParams();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["repoDataUserEdit"],
    queryFn: () => {
      return api
        .get(`/users/${userId}`, config)
        .then((response) => response.data.data[0]);
    },
  });
  const updateUserData = useMutation({
    mutationFn: (values) => {
      return api.patch(`/users/${userId}`, values, config);
    },
    onSuccess: async ({ data }) => {
      setUpdateSuccessMsg(data.data.msg)
    },
    onError: async (error) => {
      console.error("Error en la mutación:", error);  

  }})

  const handleUpdateUser = (values)=>{
    updateUserData.mutateAsync(values)
  }


  let initialValueEditUser = {};

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
      address: data?.address,
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
                        handleUpdateUser(values);
                      }}
                    >
                      {(props) => (
                        <FormUser
                          props={props}
                          initialValuesEdit={initialValueEditUser}
                          isEdit={true}
                          dataUserEdit={data}
                          isSuccessUserEdit={isSuccess}
                          isLoadingUserEdit={isLoading}
                        
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
      {updateUserData.data && (
        <Notification
          openNotification={updateUserData.isSuccess}
          message={updateSuccessMsg}
          severity={"success"}
        />
      )}
      {/* {showAlertError && (
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
