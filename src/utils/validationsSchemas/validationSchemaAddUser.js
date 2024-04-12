import * as Yup from "yup";

export const validationSchemaAddUser = Yup.object().shape({

userFirstName: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos").max(30, "Máximo 30 caracteres").required("Campo requerido"),
  
  userLastName: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos").max(30, "Máximo 30 caracteres").required("Campo requerido"),
  
  userId: Yup.string().required("Campo requerido")
  .matches(/^[0-9]+$/, "Solo se permiten números"),
  
  userPhoneNumber: Yup.string().required("Campo requerido")
  .matches(/^[0-9]+$/
  , "Solo se permiten números").max(11, "Máximo 11 digitos"),
  
  userEmail: Yup.string()
  .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}\s*$/
  , "Ingrese un correo válido").required("Campo requerido"),
  
  userName: Yup.string().max(20, "Máximo 20 caracteres").required("Campo requerido"),
  
  userPassword: Yup.string().max(20, "Máximo 20 caracteres").required("Campo requerido"),
  
  userPasswordRepeat : Yup.string().max(20, "Máximo 20 caracteres").required("Campo requerido"),
  
  userOffice: Yup.string().required("Campo requerido"),
  
  userRol: Yup.string().required("Campo requerido"),
  
  userGender: Yup.string().required("Campo requerido"),
  
  });