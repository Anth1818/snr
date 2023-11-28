export function getTypeOfCall(caseId) {
    // Obtener los datos del localStorage con la clave 'datosGuardados'
    const localStorageData = JSON.parse(localStorage.getItem('datosGuardados')) || {};
  
    // Verificar si existe un registro con el caseId proporcionado en el localStorage
    if (localStorageData && localStorageData[caseId]) {
      // Obtener el typeOfCall del registro correspondiente al caseId
      return localStorageData[caseId].typeOfCall || ''; // Puedes retornar un valor por defecto si typeOfCall no está definido
    } else {
      // Manejar el caso donde no se encuentre el registro
      return ''; // Puedes retornar un valor por defecto o manejar el escenario de acuerdo a tus necesidades
    }
  }