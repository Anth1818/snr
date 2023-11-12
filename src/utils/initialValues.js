// import { generateId } from "./generateID";

export const initialValues = {
  //data tipo de llamada y subtipos de llamada
  typeOfCall: "Orientación",
  subTypesOfCall: [],

  // data del formulario de agraviada
  typeIdOfVictim: "",
  victimIdDocument: "",
  victimName: "",
  victimLastName: "",
  victimPhoneNumber: "",
  victimPhoneNumber2: "",
  victimBirthdate: "",
  gender: "",
  stateLocation: null,
  townShipLocation: null,
  parishLocation: null,
  localLocation: "",
  isPregnant: "",
  numberOfChildren: "",
  ethnicity: "",
  maritalStatus: "",
  levelOfInstruction: "",
  ocupation: "",
  summary: "",

  //data de formas de violencia
  typeOfViolence: [],

  //data del agresor
  nameOfAggressor: "",
  lastNameOfAggressor: "",
  ageOfAggressor: "",
  levelOfInstrutionOfAggressor: "",
  bondOfAggressor: "",
  AggressorOccupation: "",

  //data de inteversion institucional

  receivingOrganism: "",
  official: "",
  position: "",
  phone: "",
  comeOnTime: "",

  //data de contacto de quien hizo la llamada

  typeOfId: "",
  idDocument: "",
  nameOfContact: "",
  lastNameOfContact: "",
  phoneNumberOfContact: "",
  phoneNumberOfContact2: "",
  emailOfContact: "",
  date: new Date().toLocaleString(),
  caseId: (Math.random() * 1000000).toString().substring(0, 5)
};
