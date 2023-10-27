import { Autocomplete, Button, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ID, GENDER, MUNICIPIO, PARROQUIA, ISPREGNANT, ESTADOCIVIL, OCUPACION, ETNIA, NIVELDEINSTRUCCION } from '../../utils/constants.js'
import { labels as STATES } from "../Statistics/Statistics0800ByStates";

export default function FormVictimsInformation() {
  return (
    <Box
      sx={{
        width: "100%",

        padding: "20px",
      }}
    >
      <Typography variant="h4" textAlign={"center"} sx={{marginBottom:'20px'}}>
        Datos de la agraviada
      </Typography>
      <FormGroup
        sx={{
          display: "flex",
          gap: "20px",
          flexDirection: "row",
          marginTop: "15px",
          justifyContent: "space-evenly",
        }}
      >
        <Autocomplete
          disablePortal
          size="small"
          id="ID"
          options={ID}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione documento de identidad" />
          )}
        ></Autocomplete>
        <TextField
          id="id-document"
          label="Ingrese documento de identidad"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          id="name"
          label="Nombres"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          id="last-name"
          label="Apellidos"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          id="phone-number"
          label="Telefono"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="phone-number2"
          label="Telefono 2"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="date"
          variant="outlined"
          size="small"
          type="date"
          sx={{ width: "300px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          id="gender"
          options={GENDER}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un género" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="states"
          options={STATES}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un estado" />
          )}
        ></Autocomplete>
        <Autocomplete
          disabled
          size="small"
          id="municipio"
          options={MUNICIPIO}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un municipio" />
          )}
        ></Autocomplete>
        <Autocomplete
          disabled
          size="small"
          id="parroquia"
          options={PARROQUIA}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un parroquia" />
          )}
        ></Autocomplete>
        <TextField
          id="location"
          label="Dirección"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />

        <Autocomplete
          disablePortal
          size="small"
          id="isPregnant"
          options={ISPREGNANT}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="¿Estás embarazada?" />
          )}
        ></Autocomplete>

        <TextField
          id="numberOfChildren"
          label="Numero de hijos"
          variant="outlined"
          size="small"
          sx={{ width: "300px", marginBottom: "10px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          id="etnia"
          options={ETNIA}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una etnia" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="estado-civil"
          options={ESTADOCIVIL}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una estado civil" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="nivel-de-instruccion"
          options={NIVELDEINSTRUCCION}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un nivel de instrucción" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="ocupacion"
          options={OCUPACION}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una ocupación" />
          )}
        ></Autocomplete>
        <TextField
          multiline
          minRows={5}
          sx={{ width: 500 }}
          label="Resumen de la llamada..."
        ></TextField>
      </FormGroup>
      <Box sx={{width:'100%', display:'flex', justifyContent:'center', marginTop:'10px'}}>
        <Button variant="contained" size="large" sx={{width:'500px'}}>
          Agregar familiar
        </Button>

      </Box>
    </Box>
  );
}