import { useEffect, useState } from "react";
import api from "../../api/API_SNR";
import { Autocomplete, Grid, TextField } from "@mui/material";

export default function LocationInputs({
  props,
  initialValues,
  isEdit,
  location,
}) {
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
    {isEdit && (
      <>
       <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          fullWidth
          name="state_id"
          freeSolo
          defaultValue={isEdit ? location.state : ""}
          id="states"
          options={locationState?.map((item) => ({
            label: item.state,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "state_id",
              value !== null ? value.value : initialValues.state_id
            );
            setSelectedState(value);
          }}
          disableClearable
          // sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Estado *"
            error={Boolean(
              props.errors?.state_id && props.touched?.state_id
            )}
            helperText={
              props.touched?.state_id ? props.errors?.state_id : ""
            } />
            
          )}
        ></Autocomplete>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          fullWidth
          name="municipality_id"
          id="municipio"
          defaultValue={location.municipality}
          options={locationMunicipality?.map((item) => ({
            label: item.municipality,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "municipality_id",
              value !== null ? value.value : initialValues.municipality_id
            );
            setSelectedMunicipality(value);
          }}
          freeSolo
          disableClearable
          // sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Municipio *" />
          )}
          
        ></Autocomplete>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          fullWidth
          name="parish_id"
          freeSolo
          defaultValue={location.parish}
          options={locationParish?.map((item) => ({
            label: item.parish,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "parish_id",
              value !== null ? value.value : initialValues.parish_id
            );
          }}
          disableClearable
          renderInput={(params) => (
            <TextField {...params} label="Parroquia *" />
          )}
          
        ></Autocomplete>
      </Grid>
      </>
    )}
    {!isEdit && (
      <>
       <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          freeSolo
          fullWidth
          name="state_id"
          id="states"
          options={locationState?.map((item) => ({
            label: item.state,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "state_id",
              value !== null ? value.value : initialValues.state_id
            );
            setSelectedState(value);
          }}
          disableClearable
          // sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Estado * " />
          )}
        ></Autocomplete>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          fullWidth
          freeSolo
          name="municipality_id"
          id="municipio"
          options={locationMunicipality?.map((item) => ({
            label: item.municipality,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "municipality_id",
              value !== null ? value.value : initialValues.municipality_id
            );
            setSelectedMunicipality(value);
          }}
          disableClearable
          // sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Municipio *" />
          )}
          
        ></Autocomplete>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <Autocomplete
          size="small"
          fullWidth
          freeSolo
          name="parish_id"
          options={locationParish?.map((item) => ({
            label: item.parish,
            value: item.id,
          }))}
          onChange={(e, value) => {
            props.setFieldValue(
              "parish_id",
              value !== null ? value.value : initialValues.parish_id
            );
          }}
          disableClearable
          renderInput={(params) => (
            <TextField {...params} label="Parroquía *" />
          )}
          
        ></Autocomplete>
      </Grid>
      </>
    )}
     
    </>
  );
}
