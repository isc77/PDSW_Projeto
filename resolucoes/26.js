/*
    Desafio 26 - Média de elementos do array
*/

const arr1 = [1, 3, 5, 6, 2, 4, 10]
const arr2 = [2, 2, 2, 2, 2]

function average(arr) {
    const sum = arr.reduce((sum, currentValue) => sum + currentValue)
    return sum / arr.length;
}

// Exporte a função para que possa ser testada
module.exports = { average };