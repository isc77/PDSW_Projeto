/*
    Desafio 27 - Soma dos valores de um objeto
*/

const obj = {
    "age": 32,
    "height": 176,
    "weight": 68,
    "score": 87,
    "temperature": 23
};

const obj2 = {
    oi: 1,
    tudo: 2,
    bem: 3
};

function sum(object) {
    let sum = 0;
    for (const prop in object) {
        sum += object[prop];
    }
    return sum;
}
// Exporte a função para que possa ser testada
module.exports = { sum };  