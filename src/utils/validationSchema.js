import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
  //----------validacion subtipo de llamada
  // subTypesOfCall: Yup.array().min(1, "Selecciona al menos un checkbox"),

  //----------validacion campos de agraviada
  // typeIdOfVictim: Yup.string().required("Campo requerido"),
  victimIdDocument: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .max(9, "Máximo 9 digitos"),

  victimName: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos"
  ),
  victimLastName: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos"
  ),
  victimPhoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .max(11, "Máximo 11 digitos"),
  victimPhoneNumber2: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .max(11, "Máximo 11 digitos"),
  // victimBirthdate: Yup.string().required("Campo requerido"),
  // gender: Yup.string().required("Campo requerido"),
  // stateLocation: Yup.string().required("Campo requerido"),
  // townShipLocation: Yup.string().required("Campo requerido"),
  // parishLocation: Yup.string().required("Campo requerido"),
  // localLocation: Yup.string().required("Campo requerido"),
  // isPregnant: Yup.string().required("Campo requerido"),
  numberOfChildren: Yup.string().matches(/^[0-9]+$/, "Solo se permiten numeros"),
  // ethnicity: Yup.string().required("Campo requerido"),
  // maritalStatus: Yup.string().required("Campo requerido"),
  // levelOfInstruction: Yup.string().required("Campo requerido"),
  // ocupation: Yup.string().required("Campo requerido"),
  // Summary: Yup.string().required("Campo requerido"),

  //---------validacion checkboxes tipos de violencia----------
  // typeOfViolence: Yup.array().min(1, "Selecciona al menos un checkbox"),


  //----------validacion de datos de agresor--------------
  nameOfAggressor: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos"
  ),
  lastNameOfAggressor: Yup.string().matches(
    /^[aA-zZ\s]+$/,
    "Solo se permiten caracteres alfabéticos"
  ),

  ageOfAggressor: Yup.string()
  .matches(/^[0-9]+$/, "Solo se permiten números"),


 //-----------validación de datos de intervencion institucional


 phone: Yup.string()
 .matches(/^[0-9]+$/, "Solo se permiten números"),




 //--------validacion de datos de contacto


 idDocument: Yup.string()
 .matches(/^[0-9]+$/, "Solo se permiten números")
 .max(9, "Máximo 9 digitos"),

 nameOfContact:  Yup.string().matches(
  /^[aA-zZ\s]+$/,
  "Solo se permiten caracteres alfabéticos"
),

lastNameOfContact: Yup.string().matches(
  /^[aA-zZ\s]+$/,
  "Solo se permiten caracteres alfabéticos"
),

phoneNumberOfContact: Yup.string()
.matches(/^[0-9]+$/, "Solo se permiten números")
.max(11, "Máximo 11 digitos"),

phoneNumberOfContact2: Yup.string()
.matches(/^[0-9]+$/, "Solo se permiten números")
.max(11, "Máximo 11 digitos"),

emailOfContact: Yup.string()
.matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Ingrese un correo válido")


});
