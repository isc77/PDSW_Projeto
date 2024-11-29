// Importando as funções do arquivo 17.js
const { max, min } = require('../resolucoes/17.js');

describe('Funções max e min', () => {
    
    // Teste para a função max
    test('Deve retornar o maior valor entre dois números', () => {
        expect(max(2, 9)).toBe(9);
        expect(max(-95, -95)).toBe(-95);
        expect(max(8, 3)).toBe(8);
    });

    // Teste para a função min
    test('Deve retornar o menor valor entre dois números', () => {
        expect(min(2, 9)).toBe(2);
        expect(min(-95, -95)).toBe(-95);
        expect(min(8, 3)).toBe(3);
    });
});
