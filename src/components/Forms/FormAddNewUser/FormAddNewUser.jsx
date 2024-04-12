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
          label="Nombres"
          name="first_name"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userFirstName" />}
          error={Boolean(
            props.errors?.userFirstName && props.touched?.userFirstName
          )}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Apellidos"
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
          label="Cédula"
          name="identity_card"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="identity_card" />}
          error={Boolean(props.errors?.identity_card && props.touched?.identity_card)}
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
          label="Teléfono 2 (Opcional)"
          name="userPhoneNumber2"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userPhoneNumber2" />}
          error={Boolean(
            props.errors?.userPhoneNumber2 && props.touched?.userPhoneNumber2
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
          name="userOffice"
          options={OFFICES}
          onChange={(e, value) => {
            props.setFieldValue(
              "userOffice",
              value !== null ? value.name : initialValuesNewUser.userOffice
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un departamento"
              error={Boolean(
                props.errors?.userOffice && props.touched?.userOffice
              )}
              helperText={
                props.touched?.userOffice ? props.errors?.userOffice : ""
              }
            />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="userRol"
          options={POSITIONS}
          onChange={(e, value) => {
            props.setFieldValue(
              "userRol",
              value !== null ? value.name : initialValuesNewUser.userRol
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un cargo"
              error={Boolean(props.errors?.userRol && props.touched?.userRol)}
              helperText={props.touched?.userRol ? props.errors?.userRol : ""}
            />
          )}
        ></Autocomplete>
        <TextField
          label="Usuario"
          name="userName"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userName" />}
          error={Boolean(props.errors?.userName && props.touched?.userName)}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Contraseña"
          name="userPassword"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userPassword" />}
          error={Boolean(
            props.errors?.userPassword && props.touched?.userPassword
          )}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Repetir Contraseña"
          name="userPasswordRepeat"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userPasswordRepeat" />}
          error={Boolean(
            props.errors?.userPasswordRepeat && props.touched?.userPassword
          )}
          size="small"
          sx={{ width: "300px" }}
        />
      </FormGroup>
      <FormButtonSubmit></FormButtonSubmit>
    </Form>
  );
}
