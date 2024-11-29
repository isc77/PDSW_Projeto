// Importando as funções do arquivo 16.js
const factorial = require('../resolucoes/16'); 

describe('Testes para a função factorial', () => {

    test('Fatorial de 8 deve ser 40320', () => {
        expect(factorial(8)).toBe(40320);
    });

    test('Fatorial de 12 deve ser 479001600', () => {
        expect(factorial(12)).toBe(479001600);
    });

    test('Fatorial de 0 deve ser 1', () => {
        expect(factorial(0)).toBe(1);
    });

    test('Fatorial de 1 deve ser 1', () => {
        expect(factorial(1)).toBe(1);
    });

    test('Fatorial de um número negativo deve lançar um erro', () => {
        // Espera que o erro lançado seja igual ao erro específico
        expect(() => factorial(-65)).toThrowError('Não existe fatorial para números negativos');
    });

    test('Fatorial de 124 deve ser um número grande', () => {
        expect(factorial(124)).toBeGreaterThan(0);
    });
});