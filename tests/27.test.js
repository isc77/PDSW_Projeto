// Importando a função do arquivo 27.js
const { sum } = require('../resolucoes/27'); 

describe('Testa a função sum', () => {
    test('Deve somar os valores de um objeto', () => {
        const obj = {
            "age": 32,
            "height": 176,
            "weight": 68,
            "score": 87,
            "temperature": 23
        };
        expect(sum(obj)).toBe(386); // 32 + 176 + 68 + 87 + 23 = 386
    });

    test('Deve somar os valores de um segundo objeto', () => {
        const obj2 = {
            oi: 1,
            tudo: 2,
            bem: 3
        };
        expect(sum(obj2)).toBe(6); // 1 + 2 + 3 = 6
    });

    test('Deve retornar 0 se o objeto estiver vazio', () => {
        const emptyObj = {};
        expect(sum(emptyObj)).toBe(0); // Nenhum valor para somar
    });

    test('Deve funcionar com objetos com valores negativos', () => {
        const objNegativo = {
            a: -1,
            b: -2,
            c: -3
        };
        expect(sum(objNegativo)).toBe(-6); // -1 + -2 + -3 = -6
    });
});
