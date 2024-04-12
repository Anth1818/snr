export function getData() {
  const datosGuardados = localStorage.getItem("datosGuardados");
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];
  return datosGuardadosArray
}

export function getUserRol() {
  return localStorage.getItem("rol")
}

export function getTokenFromlocalStorage (){
return localStorage.getItem("token")
  
}