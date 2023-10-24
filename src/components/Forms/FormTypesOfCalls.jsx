/* eslint-disable react/prop-types */
import { Checkbox, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";


// eslint-disable-next-line react/prop-types
export default function FormTypesOfCalls({ title, checkboxesData }) {
  return (
    <Box
      sx={{
        border: "solid 1px black",
        marginTop: "20px",
        width: "80%",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "20px",
      }}
    >
      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      {checkboxesData.map((checkbox) => (
        <FormControlLabel
          key={checkbox.id}
          control={
            <Checkbox
            // Aquí puedes añadir lógica para manejar el cambio de estado del checkbox
            // Por ejemplo, puedes llamar a una función cuando cambie el estado
            // onChange={() => handleCheckboxChange(checkbox.id)}
            />
          }
          label={checkbox.label}
          sx={{ display: "flex" }}
        />
      ))}
    </Box>
  );
}