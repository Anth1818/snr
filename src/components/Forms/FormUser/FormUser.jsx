import { Autocomplete, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import { ErrorMessage, Form } from "formik";
import { GENDER, OFFICES, POSITIONS } from "../../../utils/constants";
import FormButtonSubmit from "../Form0800/FormButtonSubmit";
import LocationInputs from "../LocationInputs";
import useUser from "../../../hooks/useUser";
import { initialValuesEditUser } from "../../../utils/initialValues/initialValuesEditUser";

// import { useEffect, useState } from "react";
export default function FormUser({
  props,
  initialValues: initialValuesNewUser,
  initialValues: initialValuesEditUser,
  isEdit,
}) {
  const { getUserById } = useUser();

  const { data, isSuccess, isLoading } = getUserById;
  
   
  return (
    <>
      {isEdit && (
        <Form>
          {isLoading && <p>Cargando formulario...</p>}
          {!isSuccess && <p>Error al cargar formulario...</p>}
          {isSuccess && data && isEdit && (
            <>
              <FormGroup sx={{ marginTop: "20px" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Cédula *"
                      name="identity_card"
                      defaultValue={data ? data.identity_card : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="identity_card" />}
                      error={Boolean(
                        props.errors?.identity_card &&
                          props.touched?.identity_card
                      )}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Nombres *"
                      name="names"
                      defaultValue={data ? data.names : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="names" />}
                      error={Boolean(
                        props.errors?.names && props.touched?.names
                      )}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Apellidos *"
                      name="last_names"
                      defaultValue={data ? data.last_names : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="last_names" />}
                      error={Boolean(
                        props.errors?.last_names &&
                          props.touched?.last_names
                      )}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Teléfono"
                      name="phone"
                      defaultValue={data ? data.phone : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="phone" />}
                      error={Boolean(
                        props.errors?.phone && props.touched?.phone
                      )}
                      size="small"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Correo electronico *"
                      name="email"
                      defaultValue={data ? data.email : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="email" />}
                      error={Boolean(props.errors.email && props.touched.email)}
                      size="small"
                      fullWidth
                    />
                  </Grid>

                  <LocationInputs
                    props={props}
                    initialValues={initialValuesEditUser}
                    isEdit={true}
                    location={data}
                  ></LocationInputs>

                  <Grid item xs={12} sm={4} md={3}>
                    <TextField
                      label="Dirección"
                      name="address"
                      defaultValue={data ? data.address : ""}
                      variant="outlined"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      helperText={<ErrorMessage name="address" />}
                      error={Boolean(
                        props.errors?.address && props.touched?.address
                      )}
                      size="small"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={4} md={3}>
                    <Autocomplete
                      disablePortal
                      defaultValue={GENDER.find(gender => gender.id === data.gender_id)?.label || "no valor"}
                      freeSolo
                      size="small"
                      fullWidth
                      name="gender_id"
                      id="gender"
                      options={GENDER}
                      onChange={(e, value) => {
                        props.setFieldValue(
                          "gender_id",
                          value !== null
                            ? value.id
                            : initialValuesNewUser.gender_id
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Género *"
                          error={Boolean(
                            props.errors?.gender_id && props.touched?.gender_id
                          )}
                          helperText={
                            props.touched?.gender_id
                              ? props.errors?.gender_id
                              : ""
                          }
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      name="department_id"
                      defaultValue={OFFICES.find(office => office.id === data.department_id)?.label || "no valor"}
                      freeSolo
                      options={OFFICES}
                      onChange={(e, value) => {
                        props.setFieldValue(
                          "department_id",
                          value !== null
                            ? value.id
                            : initialValuesNewUser.department_id
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Departamento *"
                          error={Boolean(
                            props.errors?.department_id &&
                              props.touched?.department_id
                          )}
                          helperText={
                            props.touched?.department_id
                              ? props.errors?.department_id
                              : ""
                          }
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                    <Autocomplete
                      disablePortal
                      size="small"
                      fullWidth
                      name="role_id"
                      defaultValue={POSITIONS.find(position => position.id === data.role_id)?.label || "no valor"}
                      freeSolo
                      options={POSITIONS}
                      onChange={(e, value) => {
                        props.setFieldValue(
                          "role_id",
                          value !== null
                            ? value.id
                            : initialValuesNewUser.role_id
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Cargo *"
                          error={Boolean(
                            props.errors?.role_id && props.touched?.role_id
                          )}
                          helperText={
                            props.touched?.role_id ? props.errors?.role_id : ""
                          }
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={4} md={3}>
                  <FormControlLabel control={<Checkbox  />} name="resetPassword"label="¿Resetear contraseña?" onChange={props.handleChange}/>
                    </Grid>            
                </Grid>
              </FormGroup>
              <FormButtonSubmit isEdit={isEdit}></FormButtonSubmit>
            </>
          )}
        </Form>
      )}

      {!isEdit && (
        <Form>
          <FormGroup sx={{ marginTop: "20px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Cédula *"
                  name="identity_card"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="identity_card" />}
                  error={Boolean(
                    props.errors?.identity_card && props.touched?.identity_card
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Nombres *"
                  name="names"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="names" />}
                  error={Boolean(
                    props.errors?.names && props.touched?.names
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Apellidos *"
                  name="last_names"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="last_names" />}
                  error={Boolean(
                    props.errors?.last_names &&
                      props.touched?.last_names
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Teléfono"
                  name="phone"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="phone" />}
                  error={Boolean(props.errors?.phone && props.touched?.phone)}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Correo electronico *"
                  name="email"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="email" />}
                  error={Boolean(props.errors.email && props.touched.email)}
                  size="small"
                  fullWidth
                />
              </Grid>

              <LocationInputs
                props={props}
                initialValues={initialValuesNewUser}
              ></LocationInputs>

              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Dirección"
                  name="address"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="address" />}
                  error={Boolean(
                    props.errors?.address && props.touched?.address
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={4} md={3}>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  name="gender_id"
                  id="gender"
                  options={GENDER}
                  onChange={(e, value) => {
                    props.setFieldValue(
                      "gender_id",
                      value !== null ? value.id : initialValuesNewUser.gender_id
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Género *"
                      error={Boolean(
                        props.errors?.gender_id && props.touched?.gender_id
                      )}
                      helperText={
                        props.touched?.gender_id ? props.errors?.gender_id : ""
                      }
                    />
                  )}
                ></Autocomplete>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  name="department_id"
                  options={OFFICES}
                  onChange={(e, value) => {
                    props.setFieldValue(
                      "department_id",
                      value !== null
                        ? value.id
                        : initialValuesNewUser.department_id
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Departamento *"
                      error={Boolean(
                        props.errors?.department_id &&
                          props.touched?.department_id
                      )}
                      helperText={
                        props.touched?.department_id
                          ? props.errors?.department_id
                          : ""
                      }
                    />
                  )}
                ></Autocomplete>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <Autocomplete
                  disablePortal
                  size="small"
                  fullWidth
                  name="role_id"
                  options={POSITIONS}
                  onChange={(e, value) => {
                    props.setFieldValue(
                      "role_id",
                      value !== null ? value.id : initialValuesNewUser.role_id
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cargo *"
                      error={Boolean(
                        props.errors?.role_id && props.touched?.role_id
                      )}
                      helperText={
                        props.touched?.role_id ? props.errors?.role_id : ""
                      }
                    />
                  )}
                ></Autocomplete>
              </Grid>
              <Grid item xs={12} sm={4} md={3}>
                <TextField
                  label="Nombre de usuario *"
                  name="username"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="username" />}
                  error={Boolean(
                    props.errors?.username && props.touched?.username
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <TextField
                  label="Contraseña *"
                  name="password"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="password" />}
                  error={Boolean(
                    props.errors?.password && props.touched?.password
                  )}
                  size="small"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6} md={12}>
                <TextField
                  label="Repetir Contraseña *"
                  name="passwordRepeat"
                  defaultValue={""}
                  variant="outlined"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={<ErrorMessage name="passwordRepeat" />}
                  error={Boolean(
                    props.errors?.passwordRepeat &&
                      props.touched?.passwordRepeat
                  )}
                  size="small"
                  fullWidth
                  // sx={{ width:{ xs: "300px", sm: "300px", md: "300px", lg:"1000px"} }}
                />
              </Grid>
            </Grid>
          </FormGroup>
          <FormButtonSubmit></FormButtonSubmit>
        </Form>
      )}
    </>
  );
}
