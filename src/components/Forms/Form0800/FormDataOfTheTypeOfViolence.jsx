import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { checkboxesDataTypesOfViolence } from "../../../utils/checkboxesData";



export default function FormDataOfTheTypeOfViolence({props, filteredData}) {

  const [value, setValue] = useState(filteredData?.typeOfViolence?.length > 0 ? "Si" : "No");
  const initialTypeOfViolence = filteredData?.typeOfViolence || [];

  const [typeOfViolenceValues, setTypeOfViolenceValues] = useState(initialTypeOfViolence);


  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const error = props.errors.typeOfViolence;

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
        Datos de las formas de violencia
      </Typography>

      <FormControl sx={{ marginLeft: "40%", marginRight: "40%" }}>
        <FormLabel id="demo-controlled-radio-buttons-group">
          ¿Identifico algunos tipos de violencia?
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="Si" control={<Radio />} label="Si" />
          <FormControlLabel value="No" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>

      {value === "Si" &&
        checkboxesDataTypesOfViolence.map((checkbox) => (
          <FormControl key={checkbox.id}>
            <FormControlLabel
              sx={{ display: "flex" }}
              control={
                <Checkbox
                  name={checkbox.name}
                  defaultChecked={typeOfViolenceValues.includes(checkbox.name)}
                  onChange={() => {
                    const { typeOfViolence } = props.values;
                    const { name } = checkbox;

                    // Verificar si el checkbox ya está seleccionado
                    const isSelected = typeOfViolence.includes(name);

                    // Si se ha seleccionado el checkbox, quítalo de la lista
                    // Si no se ha seleccionado, agrégalo a la lista
                    const updatedtypeOfViolence = isSelected
                      ? typeOfViolence.filter((item) => item !== name)
                      : [...typeOfViolence, name];

                    props.setFieldValue(
                      "typeOfViolence",
                      updatedtypeOfViolence
                    );
                  }}
                />
              }
              label={checkbox.label}
            />
          </FormControl>
        ))}
        {error && props.touched.typeOfViolence && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#fe00003d",
            }}
          >
            <Typography color={"red"}>{error}</Typography>
          </Box>
        )}
    </Box>
  );
}
