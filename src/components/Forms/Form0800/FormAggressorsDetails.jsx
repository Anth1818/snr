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
export default function FormAggressorsDetails() {
  const [value, setValue] = useState("No");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

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
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="lastNameOfAggressor"
            label="Apellidos"
            name="lastNameOfAggressor"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="ageOfAggressor"
            label="Edad aproximada"
            name="ageOfAggressor"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />

          <Autocomplete
            disablePortal
            size="small"
            id="levelOfInstrutionOfAggressor"
            name="levelOfInstrutionOfAggressor"
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
            options={VINCULO}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField {...params} label="Seleccione vinculo" />
            )}
          ></Autocomplete>
          <Autocomplete
            disablePortal
            size="small"
            id="AggressorOccupation"
            name="AggressorOccupation"
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
