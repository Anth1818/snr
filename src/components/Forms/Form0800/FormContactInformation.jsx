import {
  Autocomplete,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ID } from "../../../utils/constants";
import { debounce } from "lodash"
import { ErrorMessage } from "formik";


export default function FormContactInformation({ props, filteredData }) {
  const initialState =
  (filteredData?.typeOfId ||
    filteredData?.idDocument ||
    filteredData?.nameOfContact ||
    filteredData?.lastNameOfContact ||
    filteredData?.phoneNumberOfContact ||
    filteredData?.phoneNumberOfContact2 ||
    filteredData?.emailOfContact) 
    ? "Si" 
    : "No";


  const [value, setValue] = useState(initialState);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const debouncedHandleChange = debounce((e) => {
    props.handleChange(e);
  }, 100);

  return (
    <Box
      sx={{
        borderBottom: "solid 1px grey",
        marginTop: "20px",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
      }}
    >
      <Typography
        variant="h4"
        textAlign={"center"}
        sx={{ marginBottom: "10px" }}
      >
        Datos de contacto
      </Typography>

      <FormControl sx={{ marginLeft: "40%", marginRight: "40%" }}>
        <FormLabel id="demo-controlled-radio-buttons-group-4">
          ¿La persona que realizo la llamada desea ser contactada?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group-4"
          name="controlled-radio-buttons-group-4"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Si" control={<Radio />} label="Si" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {value === "Si" && (
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
            name="typeOfId"
            defaultValue={
              ID.find((option) => option.name === filteredData?.typeOfId)
            }
            options={ID}
            getOptionLabel={(option) => option.name}
            onChange={(e, value) => {
              props.setFieldValue(
                "typeOfId",
                value !== null ? value.name : initialValues.typeOfId
              );
            }}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Seleccione documento de identidad"
              />
            )}
          ></Autocomplete>
          <TextField
            name="idDocument"
            defaultValue={filteredData?.idDocument}
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="idDocument" />}
            error={Boolean(
              props.errors.idDocument && props.touched.idDocument
            )}
            label="Ingrese documento de identidad"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            name="nameOfContact"
            defaultValue={filteredData?.nameOfContact}
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="nameOfContact" />}
            error={Boolean(props.errors.nameOfContact && props.touched.nameOfContact)}
            label="Nombres"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            defaultValue={filteredData?.lastNameOfContact}
            name="lastNameOfContact"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="lastNameOfContact" />}
            error={Boolean(props.errors.lastNameOfContact && props.touched.lastNameOfContact)}
            label="Apellidos"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
          defaultValue={filteredData?.phoneNumberOfContact}
            name="phoneNumberOfContact"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="phoneNumberOfContact" />}
            error={Boolean(props.errors.phoneNumberOfContact && props.touched.phoneNumberOfContact)}
            label="Telefono"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
           defaultValue={filteredData?.phoneNumberOfContact2}
            label="Telefono 2"
            name="phoneNumberOfContact2"
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="phoneNumberOfContact2" />}
            error={Boolean(props.errors.phoneNumberOfContact2 && props.touched.phoneNumberOfContact2)}
            onChange={debouncedHandleChange}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
           defaultValue={filteredData?.emailOfContact}
            name="emailOfContact"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="emailOfContact" />}
            error={Boolean(props.errors.emailOfContact && props.touched.emailOfContact)}
            label="Correo electrónico"
            variant="outlined"
            size="small"
            type="email"
            sx={{ width: { xs: "300px", lg: "400px" } }}
          />
        </FormGroup>
      )}
    </Box>
  );
}
