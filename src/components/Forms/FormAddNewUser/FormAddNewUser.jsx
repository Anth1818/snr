import { Autocomplete, FormGroup, TextField } from "@mui/material";
import { ErrorMessage, Form } from "formik";
import {
  GENDER,
  OFFICES,
  POSITIONS,
} from "../../../utils/constants";
import FormButtonSubmit from "../../Forms/Form0800/FormButtonSubmit";
import LocationInputs from "../locationInputs";

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
          name="userFirstName"
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
          name="userLastName"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userLastName" />}
          error={Boolean(
            props.errors?.userLastName && props.touched?.userLastName
          )}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Cédula"
          name="userId"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userId" />}
          error={Boolean(props.errors?.userId && props.touched?.userId)}
          size="small"
          sx={{ width: "300px" }}
        />
        <TextField
          label="Teléfono"
          name="userPhoneNumber"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userPhoneNumber" />}
          error={Boolean(
            props.errors?.userPhoneNumber && props.touched?.userPhoneNumber
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
          name="userEmail"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="userEmail" />}
          error={Boolean(props.errors.userEmail && props.touched.userEmail)}
          size="small"
          sx={{ width: "300px" }}
        />
        <LocationInputs props={props} initialValues={initialValuesNewUser}></LocationInputs>
        <Autocomplete
          disablePortal
          size="small"
          name="userGender"
          id="gender"
          options={GENDER}
          onChange={(e, value) => {
            props.setFieldValue(
              "userGender",
              value !== null ? value.name : initialValuesNewUser.userGender
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Seleccione un genero"
              error={Boolean(
                props.errors?.userGender && props.touched?.userGender
              )}
              helperText={
                props.touched?.userGender ? props.errors?.userGender : ""
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
