// Importando as funções do arquivo 10.js
const { getSum } = require('../resolucoes/10');  

describe('Testando a função getSum', () => {
    test('Deve retornar 10 para o valor 4', () => {
        expect(getSum(4)).toBe(10);  // 1 + 2 + 3 + 4 = 10
    });

    test('Deve retornar 15 para o valor 5', () => {
        expect(getSum(5)).toBe(15);  // 1 + 2 + 3 + 4 + 5 = 15
    });

    test('Deve retornar 0 para o valor 0', () => {
        expect(getSum(0)).toBe(0);  // Nenhum valor a somar
    });

    test('Deve retornar 1 para o valor 1', () => {
        expect(getSum(1)).toBe(1);  // Somando apenas 1
    });

    test('Deve retornar 5050 para o valor 100', () => {
        expect(getSum(100)).toBe(5050);  // Soma de 1 até 100
    });
});
