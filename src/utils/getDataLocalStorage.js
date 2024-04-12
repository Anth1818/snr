export function getData() {
  const datosGuardados = localStorage.getItem("datosGuardados");
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];
  return datosGuardadosArray
}

export function getUserRol() {
  const userRol = localStorage.getItem("rol")
  return userRol
}