/*
    Desafio 17 - Max/Min
*/

function max(x, y) {
    return x > y ? x : y;
}

function min(x, y) {
    return x < y ? x : y;
}

// Exports das funções para testes
module.exports = { max, min };