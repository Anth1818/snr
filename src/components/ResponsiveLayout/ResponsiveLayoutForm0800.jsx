import {
  CssBaseline,
  Grid,
  Paper,
  TextField,
  // TextField,
  Toolbar,
  Typography,
  // FormGroup,
  // Select,
  // MenuItem,
  // InputLabel,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
// import FormTypesOfCalls from "../Forms/Form0800/FormTypesOfCalls";
// import { useState } from "react";
import FormVictimsInformation from "../Forms/Form0800/FormVictimsInformation";
// import FormDataOfTheTypeOfViolence from "../Forms/Form0800/FormDataOfTheTypeOfViolence";
// import FormAggressorsDetails from "../Forms/Form0800/FormAggressorsDetails";
// import FormInstitutionalIntervention from "../Forms/Form0800/FormInstitutionalIntervention";
// import FormContactInformation from "../Forms/Form0800/FormContactInformation";
// import FormSummaryCall from "../Forms/Form0800/FormSummaryCall";
import FormButtonSubmit from "../Forms/Form0800/FormButtonSubmit";
// import {
//   checkboxesDataInformation,
//   checkboxesDataIntervention,
//   checkboxesDataOrientation,
//   checkboxesDataNotRelevant,
// } from "../../utils/checkboxesData";
import { Formik, Form, ErrorMessage } from "formik";
import { validationSchema } from "../../utils/validationSchema";
import { initialValues } from "../../utils/initialValues";

export default function ResponsiveLayoutForm0800() {
  // const [selectedOption, setSelectedOption] = useState("Orientación");
  // let componentToRender = null;

  // switch (selectedOption) {
  //   case "Orientación":
  //     componentToRender = (
  //       <>
  //         <FormTypesOfCalls
  //           title={"Subtipos de orientación"}
  //           checkboxesData={checkboxesDataOrientation}
  //         />
  //         <FormVictimsInformation />
  //         <FormDataOfTheTypeOfViolence />
  //         <FormAggressorsDetails />
  //         <FormInstitutionalIntervention />
  //         <FormContactInformation />
  //         <FormButtonSubmit />
  //       </>
  //     );
  //     break;
  //   case "Información":
  //     componentToRender = (
  //       <>
  //         <FormTypesOfCalls
  //           title={"Subtipos de información"}
  //           checkboxesData={checkboxesDataInformation}
  //         />
  //         <FormSummaryCall />
  //         <FormButtonSubmit />
  //       </>
  //     );
  //     break;
  //   case "Intervención":
  //     componentToRender = (
  //       <>
  //         <FormTypesOfCalls
  //           title={"Subtipos de intervención"}
  //           checkboxesData={checkboxesDataIntervention}
  //         />
  //         <FormVictimsInformation />
  //         <FormDataOfTheTypeOfViolence />
  //         <FormAggressorsDetails />
  //         <FormInstitutionalIntervention />
  //         <FormButtonSubmit />
  //       </>
  //     );
  //     break;
  //   case "No relevante":
  //     componentToRender = (
  //       <>
  //         <FormTypesOfCalls
  //           title={"Subtipos de no relevante"}
  //           checkboxesData={checkboxesDataNotRelevant}
  //         />
  //         <Typography
  //           variant="h5"
  //           textAlign={"center"}
  //           sx={{ marginBottom: "10px", marginTop: "10px" }}
  //         >
  //           Resumen de la llamada
  //         </Typography>
  //         <FormGroup
  //           sx={{
  //             display: "flex",
  //             gap: "20px",
  //             flexDirection: "column",
  //             marginTop: "15px",
  //             justifyContent: "space-evenly",
  //             alignItems: "center",
  //           }}
  //         >
  //           <TextField
  //             multiline
  //             minRows={5}
  //             sx={{ width: 500 }}
  //             label="Resumen de la llamada..."
  //           ></TextField>
  //         </FormGroup>
  //         <FormButtonSubmit />
  //       </>
  //     );
  //     break;
  //   default:
  //     componentToRender = null;
  // }

  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
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
                  Nuevo registro 0800
                </Typography>
                <Box
                  sx={{
                    marginTop: "20px",
                  }}
                >
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {(props) => (
                      <Form>
                        {/* <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        > */} 
                        <FormVictimsInformation props={props} />
                          <FormButtonSubmit />
                          {/* <InputLabel htmlFor="option-select">
                            Selecciona una opción
                          </InputLabel>
                          <Select
                            value={selectedOption}
                            onChange={(e) => {
                              setSelectedOption(e.target.value);
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
                          {selectedOption !== null ? (
                          <div>
                            {/* Contenido a renderizar si selectedOption no es null */}
                          {/* {componentToRender} */}
                          {/* </div> */}
                          {/* ) : null} */}
                        {/* // </Box> */}
                      </Form>
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
