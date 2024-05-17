export function getData() {
  const datosGuardados = localStorage.getItem("datosGuardados");
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];
  return datosGuardadosArray;
}

export function getUserRol() {
  const user = JSON.parse(localStorage.getItem("data"));
  return user.role;
}
export function getUserDataFromStorage() {
  const user = JSON.parse(localStorage.getItem("data"));
  const { role, department, username, identity_card, gender_id, id} = user;
  return { role, department, username, identity_card, gender_id, id };
}

export function getTokenFromlocalStorage() {
  return localStorage.getItem("token");
}
