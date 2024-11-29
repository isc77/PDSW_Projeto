// Importando as funções do arquivo 12.js
const { showPrimeNumbers, isPrime } = require('../resolucoes/12');

describe('Testando funções de números primos', () => {
    // Teste para a função isPrime
    test('isPrime deve retornar true para números primos', () => {
        expect(isPrime(2)).toBe(true);
        expect(isPrime(3)).toBe(true);
        expect(isPrime(5)).toBe(true);
        expect(isPrime(7)).toBe(true);
    });

    test('isPrime deve retornar false para números não primos', () => {
        expect(isPrime(4)).toBe(false);
        expect(isPrime(6)).toBe(false);
        expect(isPrime(8)).toBe(false);
        expect(isPrime(9)).toBe(false);
    });

    // Teste para a função showPrimeNumbers
    test('showPrimeNumbers deve exibir os números primos até N', () => {
        console.log = jest.fn();  // Mocking da função console.log
        showPrimeNumbers(10);
        expect(console.log).toHaveBeenCalledWith('Números primos até 10: 2, 3, 5, 7');
    });
});
