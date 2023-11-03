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

export default function FormContactInformation() {
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
            id="ID"
            name="typeOfId"
            options={ID}
            sx={{ width: "300px" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Seleccione documento de identidad"
              />
            )}
          ></Autocomplete>
          <TextField
            id="id-document"
            name="idDocument"
            label="Ingrese documento de identidad"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="name"
            name="nameOfContact"
            label="Nombres"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="last-name"
            name="lastNameOfContact"
            label="Apellidos"
            variant="outlined"
            size="small"
            sx={{ width: "300px" }}
          />
          <TextField
            id="phone-number"
            name="phoneNumberOfContact"
            label="Telefono"
            variant="outlined"
            size="small"
            type="number"
            sx={{ width: "300px" }}
          />
          <TextField
            id="phone-number2"
            label="Telefono 2"
            name="phoneNumberOfContact2"
            variant="outlined"
            size="small"
            type="number"
            sx={{ width: "300px" }}
          />
          <TextField
            id="email"
            name="emailOfContact"
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
