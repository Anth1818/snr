import { CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import { Formik } from "formik";
import validationSchemaUser from "../../utils/validationsSchemas/validationSchemaUser";
import { initialValuesEditUser } from "../../utils/initialValues/initialValuesEditUser";
import FormUser from "../Forms/FormUser/FormUser";
import useUser from "../../hooks/useUser";
import Notification from "../Notifications/Notification";
import { useEffect } from "react";


export default function ResponsiveLayoutEditUser() {
    const { dataUserId, showAlertSuccess, setShowAlertSuccess, showAlertError, setShowAlertError, errorMessage, isPendingUserEdit, errorUserEdit } = useUser();

    useEffect(() => {
        // console.log(dataUserId);
        // console.log(errorUserEdit);
        // console.log(isPendingUserEdit);
       
    })
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
                                    <Formik
                                        initialValues={initialValuesEditUser}
                                        validationSchema={validationSchemaUser}
                                        onSubmit={(values) => {
                                            handleSubmit(values)
                                        }}
                                    >
                                        {(props) => (
                                            <FormUser
                                                props={props}
                                                initialValues={initialValuesEditUser}
                                                isEdit={true}
                                            ></FormUser>
                                        )}
                                    </Formik>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            {showAlertSuccess && <Notification openNotification={showAlertSuccess} closeNotification={() => setShowAlertSuccess(false)} message={"Registro exitoso"} severity={"success"} />}
            {showAlertError && <Notification openNotification={showAlertError} closeNotification={() => setShowAlertError(false)} message={errorMessage} severity={"error"} />}
        </Box>
    );
}
