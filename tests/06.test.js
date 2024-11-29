// Importando as funções do arquivo 06.js
const { getAgeGroup } = require('../resolucoes/06'); 

describe('getAgeGroup', () => {
    test('deve retornar "criança" para idades de 0 a 12', () => {
        expect(getAgeGroup(0)).toBe('criança');
        expect(getAgeGroup(12)).toBe('criança');
    });

    test('deve retornar "adolescente" para idades de 13 a 17', () => {
        expect(getAgeGroup(13)).toBe('adolescente');
        expect(getAgeGroup(17)).toBe('adolescente');
    });

    test('deve retornar "adulta" para idades de 18 a 59', () => {
        expect(getAgeGroup(18)).toBe('adulta');
        expect(getAgeGroup(59)).toBe('adulta');
    });

    test('deve retornar "idosa" para idades 60 ou mais', () => {
        expect(getAgeGroup(60)).toBe('idosa');
        expect(getAgeGroup(100)).toBe('idosa');
    });

    test('deve retornar null e imprimir "Idade inválida" para idades negativas', () => {
        console.log = jest.fn(); // Mocking console.log
        expect(getAgeGroup(-1)).toBeNull();
        expect(console.log).toHaveBeenCalledWith('Idade inválida');
    });
});
