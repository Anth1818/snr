import { CssBaseline, Grid, Paper, TextField, Toolbar, Typography, Button, Autocomplete, FormGroup } from "@mui/material";
import { Box, Container, width } from "@mui/system";
import RenderDrawer from "../Drawer/Drawer";
import FormTypesOfCalls from "../Forms/FormTypesOfCalls";
import { useState } from "react";
import FormVictimsInformation from "../Forms/FormVictimsInformation";
import FormDataOfTheTypeOfViolence from "../Forms/FormDataOfTheTypeOfViolence";
import FormAggressorsDetails from "../Forms/FormAggressorsDetails";
import FormInstitutionalIntervention from "../Forms/FormInstitutionalIntervention";
import FormContactInformation from "../Forms/FormContactInformation";
import FormSummaryCall from "../Forms/FormSummaryCall";
import FormButtonSubmit from "../Forms/FormButtonSubmit";

export default function ResponsiveLayoutForm0800() {

  const typesOfCall = [
    'Orientación',
    'Información',
    'Intervención',
    'No relevante'
  ]

  const checkboxesDataOrientation = [
    { id: 1, label: 'Pasos a seguir para la solucion de problemas' },
    { id: 2, label: 'Aclaracion de errores, mitos y creencias' },
    { id: 3, label: 'Legal ' },
    { id: 4, label: 'Situacion (Violencia contra la mujer) ' },
    { id: 5, label: 'Salud ' },
    { id: 6, label: 'App (Contención emocional) ' }
  ];

  const checkboxesDataInformation = [
    { id: 1, label: 'Servicios del 0800' },
    { id: 2, label: 'Referencias simples' },
    { id: 3, label: 'Puntos de encuentro' },
    { id: 4, label: 'Eventos' },
    { id: 5, label: 'Salud ' },
    { id: 6, label: 'Contactos institucionales' }
  ]

  const checkboxesDataIntervention = [
    { id: 1, label: "Protección fisica" },
    { id: 2, label: "Preservación de la vida" },
    { id: 3, label: "Protección legal" },
  ];

  const checkboxesDataNotRelevant = [
    { id: 1, label: "Violencia simulada" },
    { id: 2, label: "Agresión verbal" },
    { id: 3, label: "Niños" },
    { id: 4, label: "Sin audio" },
    { id: 5, label: "Llamada caída" },
    { id: 6, label: "Llamada equivocada" },
    { id: 7, label: "Ociosa" },
  ];

  const [selectedOption, setSelectedOption] = useState('Orientación');
  let componentToRender = null;

  switch (selectedOption) {
    case 'Orientación':
      componentToRender = (
        <>
          <FormTypesOfCalls
            title={"Subtipos de orientación"}
            checkboxesData={checkboxesDataOrientation}
          />
          <FormVictimsInformation />
          <FormDataOfTheTypeOfViolence />
          <FormAggressorsDetails />
          <FormInstitutionalIntervention />
          <FormContactInformation />
          <FormButtonSubmit />
        </>
      );
      break;
    case 'Información':
      componentToRender = (
        <>
          <FormTypesOfCalls
            title={"Subtipos de información"}
            checkboxesData={checkboxesDataInformation}
          />
          <FormSummaryCall />
          <FormButtonSubmit />
        </>
      );
      break;
    case 'Intervención':
      componentToRender = (
        <>
          <FormTypesOfCalls
            title={"Subtipos de intervención"}
            checkboxesData={checkboxesDataIntervention}
          />
          <FormVictimsInformation />
          <FormDataOfTheTypeOfViolence />
          <FormAggressorsDetails />
          <FormInstitutionalIntervention />
          <FormButtonSubmit />
        </>
      );
      break;
    case 'No relevante':
      componentToRender = (
        <>
          <FormTypesOfCalls
            title={"Subtipos de no relevante"}
            checkboxesData={checkboxesDataNotRelevant}
          />
        <Typography variant="h5" textAlign={"center"} sx={{ marginBottom: '10px', marginTop:'10px'}}>
                Resumen de la llamada
            </Typography>
            <FormGroup
                sx={{
                    display: "flex",
                    gap: "20px",
                    flexDirection: "column",
                    marginTop: "15px",
                    justifyContent: "space-evenly",
                    alignItems:"center",
                }}
            >
                <TextField
                    multiline
                    minRows={5}
                    sx={{ width: 500 }}
                    label="Resumen de la llamada..."
                ></TextField>
          </FormGroup>
        <FormButtonSubmit />
        </>
      );
      break;
    default:
      componentToRender = null;
  }

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
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
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
                  <form className=" ">
                    {/* ------Seleccionar tipo de llamada----------- */}
                    <Autocomplete
                      disablePortal
                      id="typesOfCall"
                      options={typesOfCall}
                      clearOnEscape
                      value={selectedOption}
                      sx={{ width: 300, margin: "0 auto" }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Seleccione tipo de llamada"
                          variant="outlined"
                          size="small"
                        />
                      )}
                      onChange={(event, newValue) => {
                        setSelectedOption(newValue);
                      }}
                      isOptionEqualToValue={(option, value) => option.id === value.id}
                    ></Autocomplete>

                    {selectedOption !== null ? (
                      <div>
                        {/* Contenido a renderizar si selectedOption no es null */}
                        {componentToRender}
                      </div>
                    ) : null}
                  </form>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}