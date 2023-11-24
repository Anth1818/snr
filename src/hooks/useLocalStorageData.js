import { useState, useEffect } from 'react';

// Función para obtener los datos del local storage
const getLocalStorageData = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

// Custom hook para obtener y filtrar los datos del local storage
const useLocalStorageData = (key, caseId) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Obtener los datos del local storage al cargar el componente
    const fetchedData = getLocalStorageData(key);
    setData(fetchedData);
  }, [key]);

  const filteredData = data.find(item => item.caseId === caseId);

  return { filteredData, data };
};

export default useLocalStorageData;