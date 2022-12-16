//
// 6️⃣ ***** EJERCICIO 6 ***** - sortPrimeHouses() 6️⃣
// 
// Implementar un algoritmo de ordenamiento, que además de ordenar un array de menor a mayor,
// retorne false si un número dentro del array no es primo
// EJEMPLOS:
// Dado el siguiente array:
// [25, 3, 6, 8, 5, 12, 9, 18, 11, 7]
// sortPrimeHouses() retorna => false (porque 25 por ejemplo, no es primo)
//
// Dado este otro array:
// [61, 7, 13, 11, 29, 3]
// sortPrimeHouses() retorna => [3, 7, 11, 13, 29, 61]
//⚠️ ATENCION ⚠️
// NO utilizar el método sort() de Array!
// REQUISITOS:
//  🟢 Aplicar un algoritmo de ordenamiento de menor a mayor
//  🟢 Si numuero dentro del array no es primo, retornar false

function sortPrimeHouses(array) {
  // Tu código aquí:


  if (array.length <= 1) return array;
  let pivot = array[Math.floor(Math.random() * array.length)];
  let equals = [];
  let left = [];
  let right = [];

  for (let i = 0; i < array.length; i++) {

    if (array[i] === 0 || array[i] === 1 || array[i] === 4) return false;

    for (let x = 2; x < array[i] / 2; x++) {
      if (array[i] % x === 0) return false
    }

    if (array[i] !== pivot) {

      if (array[i] > pivot) right.push(array[i])
      else left.push(array[i])

    } else equals.push(array[i])

  }
  return sortPrimeHouses(left).concat(equals).concat(sortPrimeHouses(right));


}

// ⚠️ NO MODIFICAR NADA POR DEBAJO DE ESTA LÍNEA ⚠️
module.exports = {
  sortPrimeHouses
};