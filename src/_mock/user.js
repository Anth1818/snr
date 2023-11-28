import { faker } from "@faker-js/faker";
import { sample } from "lodash";

// ----------------------------------------------------------------------

// Función para obtener los datos desde localStorage o usar datos de muestra
const obtenerDatosDesdeLocalStorage = () => {
  const datosGuardados = localStorage.getItem('datosGuardados');
  const datosGuardadosArray = datosGuardados ? JSON.parse(datosGuardados) : [];

  // Si no hay datos en localStorage, devuelve datos de muestra
  return datosGuardadosArray;
};

const users = obtenerDatosDesdeLocalStorage().map((user) => ({
  caseId: user.caseId,
  date: user.date,
  typeOfCall: user.typeOfCall,
  location:
    user.stateLocation || user.townShipLocation || user.parishLocation
      ? [user.stateLocation, user.townShipLocation, user.parishLocation].join(
          "\n"
        )
      : "Sin ubicación",
  user: faker.name.fullName(),
  status: user.status || sample(["active", "banned"]),
}));

export default users;
