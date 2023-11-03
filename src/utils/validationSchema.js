import * as Yup from "yup";


export const validationSchema = Yup.object().shape({
  //----------validacion subtipo de llamada
  // subTypesOfCall: Yup.array().min(1, "Selecciona al menos un checkbox"),

  //----------validacion campos de agraviada
  // typeIdOfVictim: Yup.string().required("Campo requerido"),
  victimIdDocument: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten numeros")
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
    .matches(/^[0-9]+$/, "Solo se permiten numeros")
    .max(11, "Máximo 11 digitos"),
  victimPhoneNumber2: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten numeros")
    .max(11, "Máximo 11 digitos"),
  // victimBirthdate: Yup.string().required("Campo requerido"),
  // gender: Yup.string().required("Campo requerido"),
  // stateLocation: Yup.string().required("Campo requerido"),
  // townShipLocation: Yup.string().required("Campo requerido"),
  // parishLocation: Yup.string().required("Campo requerido"),
  // localLocation: Yup.string().required("Campo requerido"),
  // isPregnant: Yup.string().required("Campo requerido"),
  // numberOfChildren: Yup.string().required("Campo requerido"),
  // ethnicity: Yup.string().required("Campo requerido"),
  // maritalStatus: Yup.string().required("Campo requerido"),
  // levelOfInstruction: Yup.string().required("Campo requerido"),
  // ocupation: Yup.string().required("Campo requerido"),
  // Summary: Yup.string().required("Campo requerido"),

  //---------validacion checkboxes tipos de violencia----------
  // typeOfViolence: Yup.array().min(1, "Selecciona al menos un checkbox"),
});
