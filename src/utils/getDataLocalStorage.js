export function getData() {
  const datosGuardados = localStorage.getItem("datosGuardados");
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];
  return datosGuardadosArray
}