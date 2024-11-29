// Importando a função do arquivo 26.js
const { average } = require('../resolucoes/26.js');  

describe('Função average', () => {
    test('deve retornar a média correta para arr1', () => {
        const arr1 = [1, 3, 5, 6, 2, 4, 10];
        expect(average(arr1)).toBeCloseTo(4.71, 2); // Compara até 2 casas decimais
    });

    test('deve retornar a média correta para arr2', () => {
        const arr2 = [2, 2, 2, 2, 2];
        expect(average(arr2)).toBe(2);
    });

    test('deve retornar NaN para array vazio', () => {
        const arrEmpty = [];
        expect(average(arrEmpty)).toBeNaN();
    });

    test('deve retornar o valor do único elemento para array com um único elemento', () => {
        const arrSingle = [5];
        expect(average(arrSingle)).toBe(5);
    });
});