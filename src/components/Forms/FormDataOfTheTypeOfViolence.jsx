import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

export default function FormDataOfTheTypeOfViolence() {

    const checkboxesDataTypesOfViolence = [
        { id: 1, label: "Acceso carnal violento" },
        { id: 2, label: "Acoso u hostigamiento" },
        { id: 3, label: "Acoso sexual" },
        { id: 4, label: "Amenaza" },
        { id: 5, label: "Doméstica" },
        { id: 6, label: "Exclavitud sexual" },
        { id: 7, label: "Esterilización forzada" },
        { id: 8, label: "Femicidio" },
        { id: 9, label: "Física" },
        { id: 10, label: "Institucional" },
        { id: 11, label: "Mediatica" },
        { id: 12, label: "Laboral" },
        { id: 13, label: "Obstreticia" },
        { id: 14, label: "Patrimonial y económica" },
        { id: 15, label: "Psicológica" },
        { id: 16, label: "Prostitución forzada" },
        { id: 17, label: "Sexual" },
        { id: 18, label: "Simbólica" },
        { id: 19, label: "Tráfico de mujeres y niños" },
        { id: 20, label: "Trata de mujeres y niños" },
    ];

    const [value, setValue] = useState('No');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

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
            <Typography variant="h4" textAlign={"center"} sx={{ marginBottom: '10px' }}>
                Datos de las formas de violencia
            </Typography>

            <FormControl sx={{ marginLeft: '40%', marginRight: '40%' }}>
                <FormLabel id="demo-controlled-radio-buttons-group">¿Identifico algunos tipos de violencia?</FormLabel>
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

            {value === "Si" &&  checkboxesDataTypesOfViolence.map((checkbox) => (
              <FormControlLabel
                name="typeOfViolence"
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
    )
}