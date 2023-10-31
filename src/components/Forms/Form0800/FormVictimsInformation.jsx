import { Autocomplete, Button, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ID, GENDER, MUNICIPIO, PARROQUIA, ISPREGNANT, ESTADOCIVIL, OCUPACION, ETNIA, NIVELDEINSTRUCCION } from '../../../utils/constants.js'
import { labels as STATES } from "../../Statistics/Statistics0800ByStates.jsx";
import { ErrorMessage, Field } from "formik";
import { debounce } from "lodash"

export default function FormVictimsInformation({ props }) {

  const debouncedHandleChange = debounce((e) => {
    props.handleChange(e);
  }, 100);

  const handleAutocompleteChange = (event, newValue) => {
    props.values.typeIdOfVictim = "abc"
  };
  return (
    <Box
      sx={{
        width: "100%",
        borderBottom: "solid 1px grey",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ marginBottom: "20px" }}
      >
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
          // handleChange={handleAutocompleteChange}
          // value={props.values.typeIdOfVictim}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione documento de identidad"
              name="typeIdOfVictim" />
          )}
        ></Autocomplete>
        <TextField
          id="id-document"
          name="victimIdDocument"
          label="Ingrese documento de identidad"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimIdDocument" />}
          error={
            Boolean(props.errors.victimIdDocument && props.touched.victimIdDocument)
          }
        />
        <TextField
          label="Nombres"
          name="victimName"
          variant="outlined"

          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimName" />}
          error={Boolean(props.errors.victimName && props.touched.victimName)}
          size="small"
          sx={{ width: "300px" }}
        />

        <TextField
          name="victimLastName"
          id="last-name"
          label="Apellidos"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimLastName" />}
          error={!!props.errors.victimLastName && props.touched.victimLastName}
        />
        <TextField
          id="phone-number"
          name="victimPhoneNumber"
          label="Telefono"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="phone-number2"
          name="victimPhoneNumber2"
          label="Telefono 2"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="date"
          name="victimBirthdate"
          variant="outlined"
          size="small"
          type="date"
          sx={{ width: "300px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          name="gender"
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
          name="stateLocation"
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
          name="townShipLocation"
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
          name="parishLocation"
          id="parroquia"
          options={PARROQUIA}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un parroquia" />
          )}
        ></Autocomplete>
        <TextField
          id="location"
          name="localLocation"
          label="Dirección"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />

        <Autocomplete
          disablePortal
          size="small"
          name="isPregnant"
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
          name="numberOfChildren"
          variant="outlined"
          size="small"
          sx={{ width: "300px", marginBottom: "10px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          name="ethnicity"
          id="ethnicity"
          options={ETNIA}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una etnia" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="maritalStatus"
          id="maritalStatus"
          options={ESTADOCIVIL}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una estado civil" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="levelOfInstruction"
          name="levelOfInstruction"
          options={NIVELDEINSTRUCCION}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un nivel de instrucción" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="ocupation"
          id="ocupation"
          options={OCUPACION}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una ocupación" />
          )}
        ></Autocomplete>
        <TextField
          name="Summary"
          multiline
          minRows={5}
          sx={{ width: 500 }}
          label="Resumen de la llamada..."
        ></TextField>
      </FormGroup>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "10px",
        }}
      >
        {/* <Button variant="contained" size="large" sx={{ width: "500px" }}>
          Agregar familiar
        </Button> */}
      </Box>
    </Box>
  );
}