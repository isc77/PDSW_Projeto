/*
    Desafio 25 - Interseção de arrays
*/

const arr1 = [1, 3, 5, 6, 2, 4, 10]
const arr2 = [2, 1, 7, 12, 4]
const arr3 = [1, 2, 3, 4, 5]
const arr4 = [4, 5, 6, 7, 8]

function intersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item))
}

// Testes fora da função
console.log(intersection(arr1, arr2));
console.log(intersection(arr3, arr4));

const test = [1, 3, 5, 6, 2, 4, 2, 4, 10]
console.log(intersection(test, arr3))

// Exporte a função para que possa ser testada
module.exports = intersection; 