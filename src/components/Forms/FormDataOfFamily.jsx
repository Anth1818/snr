import { Autocomplete, FormGroup, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function FormDataOfFamily() {

 const parentescoFamiliar = [
   "Hijo(a)",
   "Hermano(a)",
   "Primo(a)",
   "Abuelo(a)",
   "Tio(a)",
   "Otro",
 ];



  return (
    <Box
      sx={{
        border: "solid 1px black",
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
        Datos del familiar
      </Typography>
      <Autocomplete
        disablePortal
        id="parentesco-familiar"
        name="parentescoFamiliar"
        options={parentescoFamiliar}
        clearOnEscape
        sx={{ width: 300, margin: "0 auto" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Seleccione tipo de parentesco"
            variant="outlined"
            size="small"
          />
        )}
      ></Autocomplete>
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
          id="name-of-familiar"
          label="Nombres"
          name="nameOfFamiliar"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          id="last-name-of-familiar"
          name="lastNameOfFamiliar"
          label="Apellidos"
          variant="outlined"
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          id="phone-number-of-familiar"
          name="phoneNumberOfFamiliar"
          label="Telefono"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="phone-number2"
          name="phoneNumber2OfFamiliar"
          label="Telefono 2"
          variant="outlined"
          size="small"
          type="number"
          sx={{ width: "300px" }}
        />
        <TextField
          id="date-of-familiar"
          name="dateOfFamiliar"
          variant="outlined"
          size="small"
          type="date"
          sx={{ width: "300px" }}
        />
      </FormGroup>
    </Box>
  );
}