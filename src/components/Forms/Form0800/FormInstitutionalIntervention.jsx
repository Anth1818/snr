import { Autocomplete, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { INSTITUTIONALINTERVENTIONDATA } from "../../../utils/constants";
import { debounce } from "lodash"
import { ErrorMessage } from "formik";


export default function FormInstitutionalIntervention({ props }) {

  const [value, setValue] = useState('No');

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
        Intervención institucional
      </Typography>

      <FormControl sx={{ marginLeft: "40%", marginRight: "40%" }}>
        <FormLabel id="demo-controlled-radio-buttons-group-3">
          ¿La victima a recurrido a instituciones anteriormente?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group-3"
          name="controlled-radio-buttons-group-3"
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
            id="receivingOrganism"
            label="Organismo receptor"
            name="receivingOrganism"
            onChange={debouncedHandleChange}
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="official"
            label="Funcionario"
            name="official"
            variant="outlined"
            onChange={debouncedHandleChange}
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="position"
            label="Cargo"
            name="position"
            variant="outlined"
            onChange={debouncedHandleChange}
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="phone"
            label="Teléfono"
            name="phone"
            variant="outlined"
            onChange={debouncedHandleChange}
            onBlur={props.handleBlur}
            helperText={<ErrorMessage name="phone" />}
            error={
              !!props.errors.phone && props.touched.phone}
            size="small"
            sx={{ width: { xs: "300px", lg: "400px" } }}
          />
          <Autocomplete
            disablePortal
            size="small"
            id="occupation"
            name="comeOnTime"
            options={INSTITUTIONALINTERVENTIONDATA}
            onChange={(e, value) => {
              props.setFieldValue(
                "comeOnTime",
                value !== null ? value.name : initialValues.comeOnTime
              );
            }}
            sx={{ width: { xs: "300px", lg: "400px" } }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione respuesta" />
            )}
          ></Autocomplete>
        </FormGroup>
      )}
    </Box>
  );
}