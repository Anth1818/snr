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
import { NIVELDEINSTRUCCION, VINCULO, OCUPACION } from "../../../utils/constants";
import { debounce } from "lodash";
import { initialValues } from "../../../utils/initialValues.js";
import { ErrorMessage } from "formik";



export default function FormAggressorsDetails({props,filteredData}) {
  const initialState =
  (filteredData?.nameOfAggressor ||
    filteredData?.lastNameOfAggressor ||
    filteredData?.ageOfAggressor ||
    filteredData?.levelOfInstrutionOfAggressor ||
    filteredData?.bondOfAggressor ||
    filteredData?.aggressorOccupation) 
    ? "Si" 
    : "No";


  const [value, setValue] = useState(initialState)

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
        Datos del agresor
      </Typography>

      <FormControl sx={{ marginLeft: "40%", marginRight: "40%" }}>
        <FormLabel id="demo-controlled-radio-buttons-group-2">
          ¿La victima indico los datos del agresor?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group-2"
          name="controlled-radio-buttons-group-2"
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
          <TextField
            id="nameofAggressor"
            label="Nombres"
            name="nameOfAggressor"
            defaultValue= {filteredData?.nameOfAggressor || ""}
            variant="outlined"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="nameOfAggressor" />}
            error={Boolean(props.errors.nameOfAggressor && props.touched.nameOfAggressor)}
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="lastNameOfAggressor"
            label="Apellidos"
            name="lastNameOfAggressor"
            defaultValue= {filteredData?.lastNameOfAggressor || ""}
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="lastNameOfAggressor" />}
            error={Boolean(props.errors.lastNameOfAggressor && props.touched.lastNameOfAggressor)}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="ageOfAggressor"
            label="Edad aproximada"
            name="ageOfAggressor"
            defaultValue= {filteredData?.ageOfAggressor || ""}
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="ageOfAggressor" />}
            error={Boolean(props.errors.ageOfAggressor && props.touched.ageOfAggressor)}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />

          <Autocomplete
            disablePortal
            size="small"
            id="levelOfInstrutionOfAggressor"
            name="levelOfInstrutionOfAggressor"
            defaultValue={
              NIVELDEINSTRUCCION.find((option) => option.name === filteredData?.levelOfInstrutionOfAggressor) || null
            }
            onChange={(e, value) => {
              props.setFieldValue(
                "levelOfInstrutionOfAggressor",
                value !== null
                  ? value.name
                  : initialValues.levelOfInstrutionOfAggressor
              );
            }}
            options={NIVELDEINSTRUCCION}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione nivel de instrucción" />
            )}
          ></Autocomplete>
          <Autocomplete
            disablePortal
            size="small"
            id="bondOfAggressor"
            name="bondOfAggressor"
            defaultValue={
              VINCULO.find((option) => option.name === filteredData?.bondOfAggressor) || null
            }
            onChange={(e, value) => {
              props.setFieldValue(
                "bondOfAggressor",
                value !== null ? value.name : initialValues.bondOfAggressor
              );
            }}
            options={VINCULO}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione vinculo" />
            )}
          ></Autocomplete>
          <Autocomplete
            disablePortal
            size="small"
            id="aggressorOccupation"
            name="aggressorOccupation"
            defaultValue={
              OCUPACION.find((option) => option.name === filteredData?.aggressorOccupation) || null
            }
            onChange={(e, value) => {
              props.setFieldValue(
                "aggressorOccupation",
                value !== null ? value.name : initialValues.aggressorOccupation
              );
            }}
            options={OCUPACION}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione ocupación" />
            )}
          ></Autocomplete>
        </FormGroup>
      )}
    </Box>
  );
}
