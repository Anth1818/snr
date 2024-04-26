import { Autocomplete, FormGroup, Grid, TextField } from "@mui/material";
import { ErrorMessage, Form } from "formik";
import { GENDER, OFFICES, POSITIONS } from "../../../utils/constants";
import FormButtonSubmit from "../../Forms/Form0800/FormButtonSubmit";
import LocationInputs from "../LocationInputs";

export default function FormAddNewUser({
  props,
  initialValues: initialValuesNewUser,
}) {
  return (
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
              label="Primer nombre *"
              name="first_name"
              defaultValue={""}
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={<ErrorMessage name="first_name" />}
              error={Boolean(
                props.errors?.first_name && props.touched?.first_name
              )}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Segundo nombre *"
              name="other_names"
              defaultValue={""}
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={<ErrorMessage name="other_names" />}
              error={Boolean(
                props.errors?.other_names && props.touched?.other_names
              )}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Primer apellido"
              name="first_last_name"
              defaultValue={""}
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={<ErrorMessage name="first_last_name" />}
              error={Boolean(
                props.errors?.first_last_name && props.touched?.first_last_name
              )}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <TextField
              label="Segundo apellido"
              name="other_last_names"
              defaultValue={""}
              variant="outlined"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              helperText={<ErrorMessage name="other_last_names" />}
              error={Boolean(
                props.errors?.other_last_names &&
                  props.touched?.other_last_names
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
                  label="Seleccione un genero *"
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
                  value !== null ? value.id : initialValuesNewUser.department_id
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Seleccione un departamento *"
                  error={Boolean(
                    props.errors?.department_id && props.touched?.department_id
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
                  label="Seleccione un cargo *"
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
              error={Boolean(props.errors?.username && props.touched?.username)}
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
              error={Boolean(props.errors?.password && props.touched?.password)}
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
                props.errors?.passwordRepeat && props.touched?.passwordRepeat
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
  );
}
