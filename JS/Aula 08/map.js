// Funções Agregadoras - Map
// Map - Criar um novo array, a partir de um array existente aplicando uma função para cada elemento

const numeros = [1, 5, 7, 8];
const numerosDobrados = numeros.map((numero) => numero * 2);

console.log(numeros)
console.log(numerosDobrados)

// Sem o Map
// const numerosDobrados = []

// for (let numero of numeros) {
//     numerosDobrados.push(numero * 2)
// }