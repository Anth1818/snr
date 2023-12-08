import { Autocomplete, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ID, GENDER, MUNICIPIO, PARROQUIA, ISPREGNANT, ESTADOCIVIL, OCUPACION, ETNIA, NIVELDEINSTRUCCION, STATES } from '../../../utils/constants.js'
import { ErrorMessage } from "formik";
import { debounce } from "lodash"
import { initialValues } from "../../../utils/initialValues.js";

export let typeIdOfVictim,
victimIdDocument,
victimName,
victimLastName,
victimPhoneNumber,
victimPhoneNumber2,
victimBirthdate,
gender,
stateLocation,
townShipLocation,
parishLocation,
localLocation,
isPregnant,
numberOfChildren,
ethnicity,
maritalStatus,
levelOfInstruction,
ocupation,
summary;

export default function FormVictimsInformation({ props, filteredData}) {

  if (filteredData) {
    ({
      typeIdOfVictim,
      victimIdDocument,
      victimName,
      victimLastName,
      victimPhoneNumber,
      victimPhoneNumber2,
      victimBirthdate,
      gender,
      stateLocation,
      townShipLocation,
      parishLocation,
      localLocation,
      isPregnant,
      numberOfChildren,
      ethnicity,
      maritalStatus,
      levelOfInstruction,
      ocupation,
      summary,
    } = filteredData);
  }

  const debouncedHandleChange = debounce((e) => {
    props.handleChange(e);
  }, 100);

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
          getOptionLabel={(option) => option.name}
          size="small"
          name="typeIdOfVictim"
          id="ID"
          defaultValue={
            ID.find((option) => option.name === typeIdOfVictim) || null
          }
          options={ID}
          sx={{ width: "300px" }}
          onChange={(e, value) => {
            props.setFieldValue(
              "typeIdOfVictim",
              value !== null ? value.name : initialValues.typeIdOfVictim
            );
          }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione documento de identidad" />
          )}
        ></Autocomplete>
        <TextField
          id="id-document"
          name="victimIdDocument"
          label="Ingrese documento de identidad"
          variant="outlined"
          defaultValue={victimIdDocument || ""}
          size="small"
          sx={{ width: "300px" }}
          onChange={(e) => {
            const newValue = e.target.value;
            props.setFieldValue("victimIdDocument", newValue);
            debouncedHandleChange(e)
          }}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimIdDocument" />}
          error={Boolean(
            props.errors.victimIdDocument && props.touched.victimIdDocument
          )}
        />
        <TextField
          label="Nombres"
          name="victimName"
          defaultValue={victimName}
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
          defaultValue={victimLastName}
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
          defaultValue={victimPhoneNumber}
          label="Telefono"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimPhoneNumber" />}
          error={
            !!props.errors.victimPhoneNumber && props.touched.victimPhoneNumber
          }
        />
        <TextField
          id="phone-number2"
          name="victimPhoneNumber2"
          defaultValue={victimPhoneNumber2}
          label="Telefono 2"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimPhoneNumber2" />}
          error={
            !!props.errors.victimPhoneNumber2 &&
            props.touched.victimPhoneNumber2
          }
        />
        <TextField
          id="date"
          name="victimBirthdate"
          variant="outlined"
          defaultValue={victimBirthdate}
          size="small"
          onChange={debouncedHandleChange}
          type="date"
          sx={{ width: "300px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          name="gender"
          id="gender"
          defaultValue={
            GENDER.find((option) => option.name === gender) || null
          }
          options={GENDER}
          onChange={(e, value) => {
            props.setFieldValue(
              "gender",
              value !== null ? value.name : initialValues.gender
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un género" />
          )}
        ></Autocomplete>
        <Autocomplete
          size="small"
          name="stateLocation"
          id="states"
          options={STATES}
          defaultValue={
            STATES.find((option) => option.name === stateLocation) || null
          }
          onChange={(e, value) => {
            props.setFieldValue(
              "stateLocation",
              value !== null ? value.name : initialValues.stateLocation
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un estado" />
          )}
        ></Autocomplete>
        <Autocomplete
          size="small"
          name="townShipLocation"
          id="municipio"
          options={MUNICIPIO}
          defaultValue={
            MUNICIPIO.find((option) => option.name === townShipLocation) || null
          }
          onChange={(e, value) => {
            props.setFieldValue(
              "townShipLocation",
              value !== null ? value.name : initialValues.townShipLocation
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un municipio" />
          )}
        ></Autocomplete>
        <Autocomplete
          size="small"
          name="parishLocation"
          id="parroquia"
          options={PARROQUIA}
          defaultValue={
            PARROQUIA.find((option) => option.name === parishLocation) || null
          }
          onChange={(e, value) => {
            props.setFieldValue(
              "parishLocation",
              value !== null ? value.name : initialValues.parishLocation
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un parroquia" />
          )}
        ></Autocomplete>
        <TextField
          id="location"
          name="localLocation"
          label="Dirección"
          defaultValue={localLocation}
          onChange={debouncedHandleChange}
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />

        <Autocomplete
          disablePortal
          size="small"
          name="isPregnant"
          id="isPregnant"
          defaultValue={
            ISPREGNANT.find((option) => option.name === isPregnant) || null
          }
          options={ISPREGNANT}
          onChange={(e, value) => {
            props.setFieldValue(
              "isPregnant",
              value !== null ? value.name : initialValues.isPregnant
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="¿Estás embarazada?" />
          )}
        ></Autocomplete>

        <TextField
          id="numberOfChildren"
          label="Numero de hijos"
          name="numberOfChildren"
          defaultValue={numberOfChildren}
          variant="outlined"
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="numberOfChildren" />}
          error={!!props.errors.numberOfChildren && props.touched.numberOfChildren}
          size="small"
          sx={{ width: "300px", marginBottom: "10px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          name="ethnicity"
          id="ethnicity"
          defaultValue={
            ETNIA.find((option) => option.name === ethnicity) || null
          }
          options={ETNIA}
          onChange={(e, value) => {
            props.setFieldValue(
              "ethnicity",
              value !== null ? value.name : initialValues.ethnicity
            );
          }}
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
          defaultValue={
            ESTADOCIVIL.find((option) => option.name === maritalStatus) || null
          }
          options={ESTADOCIVIL}
          onChange={(e, value) => {
            props.setFieldValue(
              "maritalStatus",
              value !== null ? value.name : initialValues.maritalStatus
            );
          }}
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
          defaultValue={
            NIVELDEINSTRUCCION.find((option) => option.name === levelOfInstruction) || null
          }
          options={NIVELDEINSTRUCCION}
          onChange={(e, value) => {
            props.setFieldValue(
              "levelOfInstruction",
              value !== null ? value.name : initialValues.levelOfInstruction
            );
          }}
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
          defaultValue={
            OCUPACION.find((option) => option.name === ocupation) || null
          }
          onChange={(e, value) => {
            props.setFieldValue(
              "ocupation",
              value !== null ? value.name : initialValues.ocupation
            );
          }}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione una ocupación" />
          )}
        ></Autocomplete>
        <TextField
          name="summary"
          multiline
          minRows={5}
          defaultValue={summary}
          onChange={debouncedHandleChange}
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