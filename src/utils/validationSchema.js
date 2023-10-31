import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  typeIdOfVictim: Yup.string().required("Campo requerido"),
  victimIdDocument: Yup.string().required("Campo requerido"),
  victimName: Yup.string().required("Campo requerido"),
  victimLastName: Yup.string().required("Campo requerido"),
  victimPhoneNumber: Yup.string().required("Campo requerido"),
  victimPhoneNumber2: Yup.string().required("Campo requerido"),
  victimBirthdate: Yup.string().required("Campo requerido"),
  gender: Yup.string().required("Campo requerido"),
  stateLocation: Yup.string().required("Campo requerido"),
  townShipLocation: Yup.string().required("Campo requerido"),
  parishLocation: Yup.string().required("Campo requerido"),
  localLocation: Yup.string().required("Campo requerido"),
  isPregnant: Yup.string().required("Campo requerido"),
  numberOfChildren: Yup.string().required("Campo requerido"),
  ethnicity: Yup.string().required("Campo requerido"),
  maritalStatus: Yup.string().required("Campo requerido"),
  levelOfInstruction: Yup.string().required("Campo requerido"),
  ocupation: Yup.string().required("Campo requerido"),
  Summary: Yup.string().required("Campo requerido"),
});
