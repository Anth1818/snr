import { useEffect, useState } from "react";
import api from "../../api/API_SNR"
import { Autocomplete, TextField } from "@mui/material";

export default function LocationInputs({ props, initialValues}) {
  const [locationState, setLocationState] = useState([]);
  const [locationMunicipality, setLocationMunicipality] = useState([]);
  const [locationParish, setLocationParish] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");

  useEffect(() => {
    // Cargar estados
    api
      .get("http://localhost:3000/api/1.0/location/state")
      .then((response) => {
        setLocationState(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    // Cargar municipios
    if (selectedState) {
      api
        .get(
          `http://localhost:3000/api/1.0/location/municipality/state/${selectedState.value}`
        )
        .then((response) => {
          setLocationMunicipality(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedState]);

  useEffect(() => {
    if (selectedMunicipality) {
      api
        .get(
          `http://localhost:3000/api/1.0/location/parish/municipality/${selectedMunicipality.value}`
        )
        .then((response) => {
          setLocationParish(response.data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedMunicipality, selectedState]);

  return (
    <>
      <Autocomplete
        size="small"
        name="state"
        id="states"
        options={locationState?.map((item) => ({
          label: item.state,
          value: item.id,
        }))}
        isOptionEqualToValue={(option, value) => option.value === value?.value}
        onChange={(e, value) => {
          props.setFieldValue(
            "stateLocation",
            value !== null ? value.name : initialValues.stateLocation
          );
          setSelectedState(value);
        }}
        disableClearable
        sx={{ width: "300px" }}
        renderInput={(params) => (
          <TextField {...params} label="Seleccione un estado" />
        )}
      ></Autocomplete>
      <Autocomplete
        size="small"
        name="municipality"
        id="municipio"
        options={locationMunicipality?.map((item) => ({
          label: item.municipality,
          value: item.id,
        }))}
        onChange={(e, value) => {
          props.setFieldValue(
            "municipalityLocation",
            value !== null ? value.name : initialValues.townShipLocation
          );
          setSelectedMunicipality(value);
        }}
        isOptionEqualToValue={(option, value) => option.value === value?.value}
        disableClearable
        sx={{ width: "300px" }}
        renderInput={(params) => (
          <TextField {...params} label="Seleccione un municipio" />
        )}
        disabled={!selectedState}
      ></Autocomplete>
      <Autocomplete
        size="small"
        name="parish"
        options={locationParish?.map((item) => ({
          label: item.parish,
          value: item.id,
        }))}
        onChange={(e, value) => {
          props.setFieldValue(
            "parishLocation",
            value !== null ? value.name : initialValues.parishLocation
          );
        }}
        disableClearable
        isOptionEqualToValue={(option, value) => option.value === value?.value}
        sx={{ width: "300px" }}
        renderInput={(params) => (
          <TextField {...params} label="Seleccione un parroquia" />
        )}
        disabled={!selectedMunicipality || !selectedState}
      ></Autocomplete>
    </>
  );
}
