import {
  Avatar,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";

import { Formik } from "formik";
import validationSchemaEditUser from "../../utils/validationsSchemas/validationSchemaEditUser";
import FormUser from "../Forms/FormUser/FormUser";
import { config } from "../../utils/config";
import Notification from "../Notifications/Notification";
import {  useQueryClient, useMutation, useQuery } from "@tanstack/react-query";
import api from "../../api/API_SNR";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { getUserDataFromStorage } from "../../utils/getDataLocalStorage";

export default function ResponsiveLayoutViewProfile() {
  const [updateSuccessMsg, setUpdateSuccessMsg] = useState("");
  const { userId } = useParams();
  const queryClient = useQueryClient();

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['userDataProfile', userId],
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
      setUpdateSuccessMsg(data.data.msg);
      queryClient.invalidateQueries(["userDataProfile", userId]);
    },
    onError: async (error) => {
      console.error("Error en la mutación:", error);
    },
  });

  const handleUpdateUser = (values) => {
    updateUserData.mutateAsync(values);
  };

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

  const { gender_id } = getUserDataFromStorage();

  const photoUrl =
    gender_id === 1
      ? "/assets/female-user-profile.png"
      : "/assets/male-user-profile.webp";
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Usuarios"}></RenderDrawer>
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
          <Typography variant="h4" gutterBottom align="center">
            Perfil de usuario
          </Typography>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection:"column",
                alignItems: "center",
                justifyContent: "center",
                height: "550px",
                mt: 2,
              }}
            >
                  <Avatar
              alt="Remy Sharp"
              sx={{ width: 150, height: 150 }}
              src={photoUrl}
            />
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
                      viewProfile={true}
                      dataUserEdit={data}
                      isSuccessUserEdit={isSuccess}
                      isLoadingUserEdit={isLoading}
                    ></FormUser>
                  )}
                </Formik>
              )}
            </Paper>
          </Grid>
        </Container>
        {updateUserData.data && (
          <Notification
            openNotification={updateUserData.isSuccess}
            message={updateSuccessMsg}
            severity={"success"}
          />
        )}
      </Box>
    </Box>
  );
}
