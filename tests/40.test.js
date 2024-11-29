// Importando a função do arquivo 40.js
const transformArray = require('../resolucoes/40'); 

describe('transformArray', () => {
  test('deve transformar os valores do array corretamente', () => {
    const arr = [1, 2, 3, 4];
    const result = transformArray(arr, value => value * value);
    expect(result).toEqual([1, 4, 9, 16]);
  });

  test('deve aplicar o callback de maneira consistente', () => {
    const arr = [1, 2, 3, 4];
    const result = transformArray(arr, () => 'banana');
    expect(result).toEqual(['banana', 'banana', 'banana', 'banana']);
  });

  test('não deve modificar o array original', () => {
    const arr = [1, 2, 3, 4];
    transformArray(arr, value => value * value);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  test('deve retornar um array vazio quando o array de entrada for vazio', () => {
    const result = transformArray([], value => value * value);
    expect(result).toEqual([]);
  });

  test('deve aplicar corretamente funções que alteram o tipo dos elementos', () => {
    const arr = [1, 2, 3];
    const result = transformArray(arr, value => String(value));
    expect(result).toEqual(['1', '2', '3']);
  });
});
