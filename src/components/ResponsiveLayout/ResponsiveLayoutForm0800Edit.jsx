import {
  CssBaseline,
  Grid,
  InputLabel,
  Paper,
  Select,
  Toolbar,
  Typography,
  MenuItem,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import React, { useEffect } from "react";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import FormSubTypesOfCalls from "../Forms/Form0800/FormSubTypesOfCalls";
import { useState } from "react";
import FormVictimsInformation from "../Forms/Form0800/FormVictimsInformation";
import FormDataOfTheTypeOfViolence from "../Forms/Form0800/FormDataOfTheTypeOfViolence";
import FormAggressorsDetails from "../Forms/Form0800/FormAggressorsDetails";
import FormInstitutionalIntervention from "../Forms/Form0800/FormInstitutionalIntervention";
import FormContactInformation from "../Forms/Form0800/FormContactInformation";
import FormSummaryCall from "../Forms/Form0800/FormSummaryCall";
import FormButtonSubmit from "../Forms/Form0800/FormButtonSubmit";
import {
  checkboxesDataInformation,
  checkboxesDataIntervention,
  checkboxesDataOrientation,
  checkboxesDataNotRelevant,
} from "../../utils/checkboxesData";
import { Formik, Form } from "formik";
import { validationSchema } from "../../utils/validationsSchemas/validationSchema0800";
import { guardarEnJSON } from "../../utils/saveDataLocalStorage";
import { initialValuesEdit } from "../../utils/initialValues/initialValuesEdit";
import {useNavigate} from "react-router-dom"

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ResponsiveLayoutForm0800Edit({ caseId }) {
  const [showAlert, setShowAlert] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [filteredData, setFilteredData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filtrarDatos = () => {
      // Aquí obtienes los datos del localStorage y actualizas el estado
      const localStorageData =
        JSON.parse(localStorage.getItem("datosGuardados")) || {};
      const foundData = localStorageData.find((item) => item.caseId === caseId);
      if (foundData) {
        setSelectedOption(foundData.typeOfCall || ""); // Actualizas selectedOption con el typeOfCall del registro filtrado
        setFilteredData(foundData);
      }
    };

    filtrarDatos(); // Llamas a la función para cargar los datos cuando el componente se monta
  }, [caseId]);

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setShowAlert(false);
  };

  const handleSubmit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    guardarEnJSON(values);
  };

  const handleRenderForm = (props, disableButton, caseId, filteredData) => {
    const orientationProps = {
      title: "Subtipos de orientación",
      checkboxesData: checkboxesDataOrientation,
      props: props,
      filteredData: filteredData,
    };
    const informationProps = {
      title: "Subtipos de información",
      checkboxesData: checkboxesDataInformation,
      props: props,
      filteredData: filteredData,
    };
    const interventionProps = {
      title: "Subtipos de intervención",
      checkboxesData: checkboxesDataIntervention,
      props: props,
      filteredData: filteredData,
    };
     const notRelevantProps = {
       title: "Subtipos de no relevante",
       checkboxesData: checkboxesDataNotRelevant,
       props: props,
       filteredData: filteredData,
     };
    switch (selectedOption) {
      case "Orientación":
        return (
          <>
            <FormSubTypesOfCalls
              title={"Subtipos de orientación"}
              checkboxesData={checkboxesDataOrientation}
              props={props}
              filteredData={filteredData}
              isEditMode
            />
            <FormVictimsInformation {...orientationProps} isEditMode />
            <FormDataOfTheTypeOfViolence {...orientationProps} />
            <FormAggressorsDetails {...orientationProps} />
            <FormInstitutionalIntervention {...orientationProps} />
            <FormContactInformation {...orientationProps} />
            <FormButtonSubmit
              disableButton={disableButton}
              {...orientationProps}
            />
          </>
        );
      case "Información":
        
        return (
          <>
            <FormSubTypesOfCalls {...informationProps} />
            <FormSummaryCall {...informationProps} />
            <FormButtonSubmit disableButton={disableButton} />
          </>
        );
      case "Intervención":
        
        return (
          <>
            <FormSubTypesOfCalls {...interventionProps} />
            <FormVictimsInformation {...interventionProps} />
            <FormDataOfTheTypeOfViolence {...interventionProps} />
            <FormAggressorsDetails {...interventionProps} />
            <FormInstitutionalIntervention {...interventionProps} />
            <FormButtonSubmit disableButton={disableButton} />
          </>
        );
      case "No relevante":
        return (
          <>
            <FormSubTypesOfCalls {...notRelevantProps} />
            <FormSummaryCall {...notRelevantProps}></FormSummaryCall>
            <FormButtonSubmit disableButton={disableButton} />
          </>
        );
      default:
        return null; // Si no coincide con ningún tipo de llamada conocido
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <RenderDrawer titlePage={"Formulario 0800"}></RenderDrawer>
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
          <Grid container>
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                }}
              >
                <Typography variant="h3" textAlign={"center"}>
                  Editar registro
                </Typography>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <Formik
                    initialValues={initialValuesEdit}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      handleSubmit(values); // Llama a tu función de manejo de envío
                      setShowAlert(true); // Mostrar el Alert al enviar el formulario
                      setDisableButton(true);
                      setTimeout(() => {
                        setDisableButton(false);
                        navigate("/Page0800"); // Redireccionar después del tiempo especificado
                      }, 2500);
                    }}
                  >
                    {(props) => (
                      <Form>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <InputLabel htmlFor="option-select">
                            Selecciona una opción
                          </InputLabel>
                          <Select
                            disabled
                            value={selectedOption}
                            onChange={(e) => {
                              setSelectedOption(e.target.value);
                              props.setFieldValue("typeOfCall", e.target.value);
                            }}
                            inputProps={{
                              id: "option-select",
                              name: "typeOfCall",
                            }}
                            sx={{ width: 300 }}
                          >
                            <MenuItem value={"Orientación"}>
                              Orientación
                            </MenuItem>
                            <MenuItem value={"Información"}>
                              Información
                            </MenuItem>
                            <MenuItem value={"Intervención"}>
                              Intervención
                            </MenuItem>
                            <MenuItem value={"No relevante"}>
                              No relevante
                            </MenuItem>
                          </Select>
                        </Box>
                        {handleRenderForm(
                          props,
                          disableButton,
                          caseId,
                          filteredData
                        )}
                      </Form>
                    )}
                  </Formik>
                  <Snackbar
                    open={showAlert}
                    autoHideDuration={2000}
                    onClose={handleCloseAlert}
                  >
                    <Alert
                      onClose={handleCloseAlert}
                      severity="success"
                      sx={{ width: "100%" }}
                    >
                      Registro exitoso
                    </Alert>
                  </Snackbar>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
