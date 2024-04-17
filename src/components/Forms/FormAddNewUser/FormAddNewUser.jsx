import { Autocomplete, FormGroup, TextField } from "@mui/material";
import { ErrorMessage, Form } from "formik";
import {
  GENDER,
  OFFICES,
  POSITIONS,
} from "../../../utils/constants";
import FormButtonSubmit from "../../Forms/Form0800/FormButtonSubmit";
import LocationInputs from "../LocationInputs";

export default function FormAddNewUser({ props, initialValues: initialValuesNewUser }) {
  
  return (
    <Form>
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
          label="Cédula"
          name="identity_card"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="identity_card"/>}
          error={Boolean(props.errors?.identity_card && props.touched?.identity_card)}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Primer nombre"
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
          sx={{ width: "300px" }}
        />
        <TextField
          label="Segundo nombre"
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
          sx={{ width: "300px" }}
        />
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
          sx={{ width: "300px" }}
        />
         <TextField
          label="Segundo apellido"
          name="other_last_names"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="other_last_names" />}
          error={Boolean(
            props.errors?.other_last_names && props.touched?.other_last_names
          )}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Teléfono"
          name="phone"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="phone" />}
          error={Boolean(
            props.errors?.phone && props.touched?.phone
          )}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Correo electronico"
          name="email"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="email" />}
          error={Boolean(props.errors.email && props.touched.email)}
          size="small"
          sx={{ width: "300px" }}
        />
        <LocationInputs props={props} initialValues={initialValuesNewUser}></LocationInputs>
        <Autocomplete
          disablePortal
          size="small"
          name="gender_id"
          id="gender"
          options={GENDER}
          onChange={(e, value) => {
            props.setFieldValue(
              "gender_id",
              value !== null ? value.id : initialValuesNewUser.gender_id
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un genero"
              error={Boolean(
                props.errors?.gender_id && props.touched?.gender_id
              )}
              helperText={
                props.touched?.gender_id ? props.errors?.gender_id : ""
              }
            />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="department_id"
          options={OFFICES}
          onChange={(e, value) => {
            props.setFieldValue(
              "department_id",
              value !== null ? value.id : initialValuesNewUser.department_id
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un departamento"
              error={Boolean(
                props.errors?.department_id && props.touched?.department_id
              )}
              helperText={
                props.touched?.department_id ? props.errors?.department_id : ""
              }
            />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="role_id"
          options={POSITIONS}
          onChange={(e, value) => {
            props.setFieldValue(
              "role_id",
              value !== null ? value.id : initialValuesNewUser.role_id
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un cargo"
              error={Boolean(props.errors?.role_id && props.touched?.role_id)}
              helperText={props.touched?.role_id ? props.errors?.role_id : ""}
            />
          )}
        ></Autocomplete>
        <TextField
          label="Usuario"
          name="username"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="username" />}
          error={Boolean(props.errors?.username && props.touched?.username)}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Contraseña"
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
          sx={{ width: "300px" }}
        />
        <TextField
          label="Repetir Contraseña"
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
          sx={{ width: "300px" }}
        />
      </FormGroup>
      <FormButtonSubmit></FormButtonSubmit>
    </Form>
  );
}
