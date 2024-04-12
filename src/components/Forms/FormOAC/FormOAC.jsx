import { Autocomplete, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { GENDER, MUNICIPIO, PARROQUIA, REFERREDTO, STATES,STATUS, RECEIVEDBY } from '../../../utils/constants.js'
import { ErrorMessage } from "formik";
import { debounce } from "lodash"
import  initialValues  from "../../../utils/initialValues/initialValuesOAC.js";

export default function FormOAC({ props}) {

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
        Formulario OAC
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
        <TextField
          id="id-document"
          name="victimIdDocument"
          label="Ingrese documento de identidad"
          variant="outlined"

          size="small"
          sx={{ width: "300px" }}
          onChange={(e) => {
            debouncedHandleChange(e)
            // const newValue = e.target.value;
            // props.setFieldValue("victimIdDocument", newValue);
          }}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimIdDocument" />}
        
        />
        <TextField
          label="Nombres"
          name="victimName"
          variant="outlined"
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimName" />}
         
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
         
        />
        <TextField
          id="phone-number"
          name="victimPhoneNumber"
          
          label="Telefono"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="victimPhoneNumber" />}
          
        />
      <TextField
            id="ageOfVictim"
            label="Edad aproximada"
            name="ageOfVictim"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="ageOfVictim" />}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
        <Autocomplete
          disablePortal
          size="small"
          name="gender"
          id="gender"
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
          onChange={debouncedHandleChange}
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />

            <TextField
            id="diagnostic"
            label="Diagnostico"
            name="diagnostic"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="diagnostic" />}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />

        <TextField
          id="request"
          label="Solicitud"
          name="request"
          variant="outlined"
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="request" />}
          size="small"
          sx={{ width: "300px", marginBottom: "10px" }}
        />
        <Autocomplete
          disablePortal
          size="small"
          name="referredTo"
          id="referredTo"
          options={REFERREDTO}
          onChange={(e, value) => {
            props.setFieldValue(
              "ethnicity",
              value !== null ? value.name : initialValues.ethnicity
            );
          }}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Referido a" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="status"
          id="status"
          options={STATUS}
          onChange={(e, value) => {
            props.setFieldValue(
              "maritalStatus",
              value !== null ? value.name : initialValues.maritalStatus
            );
          }}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Estatus" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          id="receivedBy"
          name="receivedBy"
          options={RECEIVEDBY}
          onChange={(e, value) => {
            props.setFieldValue(
              "levelOfInstruction",
              value !== null ? value.name : initialValues.levelOfInstruction
            );
          }}
          sx={{ width: "300px", marginBottom: "10px" }}
          renderInput={(params) => (
            <TextField {...params} label="Recibido por" />
          )}
        ></Autocomplete>
       <TextField
          id="origin"
          label="Procedencia"
          name="origin"
          variant="outlined"
          onChange={debouncedHandleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="origin" />}
          size="small"
          sx={{ width: "300px", marginBottom: "10px" }}
        />
        <TextField
          name="observations"
          multiline
          minRows={5}
          onChange={debouncedHandleChange}
          sx={{ width: 650 }}
          label="Observaciones..."
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