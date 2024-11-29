// Importando as funções do arquivo 02.js
const { getIMC } = require('../resolucoes/02.js'); 

describe('Testes para a função getIMC', () => {
    test('Deve calcular o IMC corretamente para peso e altura válidos', () => {
        const weight = 70; // 70 kg
        const heightInCm = 170; // 170 cm
        const expectedIMC = 70 / ((170 / 100) ** 2);
        expect(getIMC(weight, heightInCm)).toBeCloseTo(expectedIMC, 5); // Precisão até 5 casas decimais
    });

    test('Deve retornar Infinity quando a altura for 0', () => {
        const weight = 70;
        const heightInCm = 0; // Altura inválida
        expect(getIMC(weight, heightInCm)).toBe(Infinity);
    });

    test('Deve retornar 0 quando o peso for 0', () => {
        const weight = 0; // Peso inválido
        const heightInCm = 170;
        expect(getIMC(weight, heightInCm)).toBe(0);
    });

    test('Deve lidar corretamente com entradas negativas', () => {
        const weight = -70; // Peso negativo
        const heightInCm = 170;
        expect(getIMC(weight, heightInCm)).toBeCloseTo(-70 / ((170 / 100) ** 2), 5);
    });
});
