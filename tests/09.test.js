// Importando as funções do arquivo 06.js
const { computeFee, isFreeFee, isElder } = require('../resolucoes/09');

// Testando a função computeFee
describe('computeFee', () => {
    test('Deve retornar "Grátis" para idade igual ou menor que 6', () => {
        expect(computeFee(6, false)).toBe("Grátis");
        expect(computeFee(5, false)).toBe("Grátis");
    });

    test('Deve retornar tarifa com 50% de desconto para estudantes', () => {
        expect(computeFee(25, true)).toBe(1.25);
    });

    test('Deve retornar tarifa com 30% de desconto para idosos', () => {
        expect(computeFee(60, false)).toBe(1.75);
        expect(computeFee(65, false)).toBe(1.75);
    });

    test('Deve retornar tarifa normal para outros casos', () => {
        expect(computeFee(25, false)).toBe("2.50");
    });
});

// Testando a função isFreeFee
describe('isFreeFee', () => {
    test('Deve retornar true para idades menores ou iguais a 6', () => {
        expect(isFreeFee(6)).toBe(true);
        expect(isFreeFee(5)).toBe(true);
    });

    test('Deve retornar false para idades maiores que 6', () => {
        expect(isFreeFee(7)).toBe(false);
    });
});

// Testando a função isElder
describe('isElder', () => {
    test('Deve retornar true para idades maiores ou iguais a 60', () => {
        expect(isElder(60)).toBe(true);
        expect(isElder(65)).toBe(true);
    });

    test('Deve retornar false para idades menores que 60', () => {
        expect(isElder(59)).toBe(false);
    });
});
