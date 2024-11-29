/*
    Desafio 40 - Clone do map()
*/

function transformArray(arr, callback) {
    const newArr = [];
    arr.forEach(item => newArr.push(callback(item)));
    return newArr;
}

// Exporta a função para uso em testes
module.exports = transformArray; 

