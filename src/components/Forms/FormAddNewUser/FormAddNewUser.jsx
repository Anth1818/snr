import { Autocomplete, FormGroup, TextField } from "@mui/material";
import { ErrorMessage, Form } from "formik";
import { initialValuesNewUser } from "../../../utils/initialValuesNewUser";
import { GENDER, OFFICES, POSITIONS } from "../../../utils/constants";
import FormButtonSubmit from "../../Forms/Form0800/FormButtonSubmit";


export default function FormAddNewUser({props}) {
  
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
          label="Teléfono 2"
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
          error={Boolean(props.errors?.userEmail && props.touched?.userEmail)}
          size="small"
          sx={{ width: "300px" }}
        />
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
            <TextField {...params} label="Seleccione un género" />
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
              value !== null ? value.name : initialValuesNewUser.useOffice
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un departamento" />
          )}
        ></Autocomplete>
        <Autocomplete
          disablePortal
          size="small"
          name="userPosition"
          options={POSITIONS}
          onChange={(e, value) => {
            props.setFieldValue(
              "userPosition",
              value !== null ? value.name : initialValuesNewUser.userPosition
            );
          }}
          sx={{ width: "300px" }}
          renderInput={(params) => (
            <TextField {...params} label="Seleccione un cargo" />
          )}
        ></Autocomplete>
        <TextField
          label="Usuario"
          name="user"
          defaultValue={""}
          variant="outlined"
          onChange={props.handleChange}
          onBlur={props.handleBlur}
          helperText={<ErrorMessage name="user" />}
          error={Boolean(props.errors?.user && props.touched?.user)}
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
