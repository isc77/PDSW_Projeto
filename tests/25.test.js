// Importando a função do arquivo 25.js
const intersection = require('../resolucoes/25'); 

describe('Testes da função intersection', () => {
    test('Deve retornar a interseção entre dois arrays', () => {
        const arr1 = [1, 3, 5, 6, 2, 4, 10];
        const arr2 = [2, 1, 7, 12, 4];
        const result = intersection(arr1, arr2);
        expect(result).toEqual([1, 2, 4]);  // Espera os elementos comuns
    });

    test('Deve retornar um array vazio se não houver interseção', () => {
        const arr1 = [1, 2, 3];
        const arr2 = [4, 5, 6];
        const result = intersection(arr1, arr2);
        expect(result).toEqual([]);  // Espera um array vazio
    });

    test('Deve incluir elementos duplicados quando presentes', () => {
        const arr1 = [1, 2, 2, 4];
        const arr2 = [2, 4, 4];
        const result = intersection(arr1, arr2);
        expect(result).toEqual([2, 2, 4]);  // Espera duplicados na interseção
    });

    test('Deve retornar um array vazio se um dos arrays for vazio', () => {
        const arr1 = [];
        const arr2 = [1, 2, 3];
        const result = intersection(arr1, arr2);
        expect(result).toEqual([]);  // Espera um array vazio
    });
});
