/*
    Desafio 16 - Fatorial
*/

// fazendo sem recursão
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    
    if (x < 0) {
        throw new Error('Não existe fatorial para números negativos');
    }

    let result = x;
    for (let i = x - 1; i > 0; i--) {
        result *= i;
    }
    return result;
}
// Exports das funções para testes
module.exports = factorial;