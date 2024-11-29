/*
    Desafio 20 - Palíndromo
*/

// Usando a função criada no exercício 18
const reverse = require("./18");

function isPalindrome(str) {
    return str.toLowerCase() === reverse(str);
}

// Exportando a função para ser usada em outros módulos
module.exports = isPalindrome;
