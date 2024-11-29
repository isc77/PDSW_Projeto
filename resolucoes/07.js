/*
    Desafio 07 - Comparação de números
*/

const X = 10;
const Y = -8; // Definindo apenas uma vez

// função sem inicialização redundante para 'resultado'
const compareNumbers = (x, y) => {
    if (x === y) return 'igual';
    if (x < y) return 'menor';
    return 'maior';
}

console.log(`${X} é ${compareNumbers(X, Y)} que ${Y}.`);

// Exportando a função para ser utilizada nos testes
module.exports = { compareNumbers };