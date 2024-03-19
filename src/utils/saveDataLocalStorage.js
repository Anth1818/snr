
export const guardarEnJSON = (datos) => {
  // Agregamos un ID único a los datos antes de guardarlos
  const datosConId = { ...datos };

  // Obtenemos los datos actuales del archivo JSON (si existe)
  const datosGuardados = localStorage.getItem("datosGuardados");
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];

  // Agregamos los nuevos datos al array
  datosGuardadosArray.push(datosConId);

  // Convertimos el array a formato JSON y lo guardamos
  localStorage.setItem("datosGuardados", JSON.stringify(datosGuardadosArray));
};

export const saveTokenLocalStorage = (token) => {
  localStorage.setItem("token",token)
}

export const removeTokenLocalStorage = () => {
  localStorage.removeItem("token")
}