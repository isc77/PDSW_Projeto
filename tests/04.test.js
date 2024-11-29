// Importando as funções do arquivo 04.js
const { getArea, getPerimeter } = require('../resolucoes/04');

describe('Desafio 04 - Cálculo de área e perímetro', () => {
    test('Calcula corretamente a área de um retângulo', () => {
        expect(getArea(30, 12)).toBe(360); // 30 * 12 = 360
        expect(getArea(5, 10)).toBe(50); // 5 * 10 = 50
        expect(getArea(0, 10)).toBe(0); // Casos limites
    });

    test('Calcula corretamente o perímetro de um retângulo', () => {
        expect(getPerimeter(30, 12)).toBe(84); // (30 + 12) * 2 = 84
        expect(getPerimeter(5, 10)).toBe(30); // (5 + 10) * 2 = 30
        expect(getPerimeter(0, 10)).toBe(20); // Casos limites
    });
});
