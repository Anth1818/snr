export const generateId = () => {
  // Genera un número aleatorio entre 0 y 1
  const randomNumber = Math.random();

  // Convierte el número aleatorio a un número entero
  const randomInt = Math.floor(randomNumber * 10000);

  // Devuelve el número aleatorio como un string
  return `${randomInt}`;
};
