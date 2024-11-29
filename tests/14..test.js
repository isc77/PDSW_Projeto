// Importando as funções do arquivo 14.js
const { fibonacci, showFibonacci } = require('../resolucoes/14');

// Testes para a função fibonacci
describe('Testando a função fibonacci', () => {
    test('Retorna 0 para fibonacci(0)', () => {
        expect(fibonacci(0)).toBe(0);
    });

    test('Retorna 1 para fibonacci(1)', () => {
        expect(fibonacci(1)).toBe(1);
    });

    test('Retorna 55 para fibonacci(10)', () => {
        expect(fibonacci(10)).toBe(55);
    });

    test('Retorna erro para valor negativo', () => {
        expect(() => fibonacci(-1)).toThrow('Foi digitado um valor negativo');
    });
});

// Testes para a função showFibonacci
describe('Testando a função showFibonacci', () => {
    console.log = jest.fn(); // Mocking da função console.log

    test('Imprime a sequência de Fibonacci até o número 50', () => {
        showFibonacci(50);
        expect(console.log).toHaveBeenCalledWith('0, 1, 1, 2, 3, 5, 8, 13, 21, 34');
    });

    test('Imprime mensagem de erro para número negativo', () => {
        showFibonacci(-1);
        expect(console.log).toHaveBeenCalledWith('Por favor, entre com um número maior que zero');
    });
});
