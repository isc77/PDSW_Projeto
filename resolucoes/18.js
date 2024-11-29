/*
    Desafio 18 - Inversão de string
*/

// Função para inverter a string
function reverse(str) {
    return str.toLowerCase().split('').reverse().join('');
}

// Exports das funções para testes
module.exports = reverse;
