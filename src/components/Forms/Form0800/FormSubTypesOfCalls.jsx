/* eslint-disable react/prop-types */
import { Checkbox, FormControl, FormControlLabel, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function FormSubTypesOfCalls({ title, checkboxesData, props, filteredData, isEditMode}) {
  const error = props.errors.subTypesOfCall

  const subTypeOfCallValues = isEditMode ? filteredData?.subTypesOfCall
   : [];
   

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
      <Typography variant="h4" textAlign={"center"}>
        {title}
      </Typography>
      {checkboxesData.map((checkbox) => (
        <FormControl key={checkbox.id} sx={{ display: "flex" }}>
          <FormControlLabel
            control={
              <Checkbox
                
                name={checkbox.name}
                defaultChecked={subTypeOfCallValues.includes(checkbox.name)}
                onChange={() => {
                  const { subTypesOfCall } = props.values;
                  const { name } = checkbox;

                  // Verificar si el checkbox ya está seleccionado
                  const isSelected = subTypesOfCall.includes(name);

                  // Si se ha seleccionado el checkbox, quítalo de la lista
                  // Si no se ha seleccionado, agrégalo a la lista
                  const updatedSubTypesOfCall = isSelected
                    ? subTypesOfCall.filter((item) => item !== name)
                    : [...subTypesOfCall, name];

                  props.setFieldValue("subTypesOfCall", updatedSubTypesOfCall);
                }}
              />
            }
            label={checkbox.label}
          />
        </FormControl>
      ))}
      {error &&
        props.touched.subTypesOfCall && (
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