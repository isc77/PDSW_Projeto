// Importando a função do arquivo 24.js
const { concatenate, concatenateWithConcat } = require('../resolucoes/24');

describe('Funções de concatenação de arrays', () => {
  test('concatenate deve concatenar dois arrays utilizando spread operator', () => {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const result = concatenate(arr1, arr2);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('concatenateWithConcat deve concatenar dois arrays utilizando concat', () => {
    const arr1 = [0, 1, 2];
    const arr2 = [3, 4, 5];
    const result = concatenateWithConcat(arr1, arr2);
    expect(result).toEqual([0, 1, 2, 3, 4, 5]);
  });

  test('concatenate deve concatenar arrays com elementos do tipo string', () => {
    const arr3 = ['casa', 'asa', 'boca'];
    const arr4 = ['olho', 'sogro', 'menta'];
    const result = concatenate(arr3, arr4);
    expect(result).toEqual(['casa', 'asa', 'boca', 'olho', 'sogro', 'menta']);
  });

  test('concatenateWithConcat deve concatenar arrays com elementos do tipo string', () => {
    const arr3 = ['casa', 'asa', 'boca'];
    const arr4 = ['olho', 'sogro', 'menta'];
    const result = concatenateWithConcat(arr3, arr4);
    expect(result).toEqual(['casa', 'asa', 'boca', 'olho', 'sogro', 'menta']);
  });

  test('concatenate deve lidar com arrays aninhados', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenate(test1, test2);
    expect(result).toEqual([0, 1, [2], 3, 4, 5]);
  });

  test('concatenateWithConcat deve lidar com arrays aninhados', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenateWithConcat(test1, test2);
    expect(result).toEqual([0, 1, [2], 3, 4, 5]);
  });

  test('concatenate não deve ser afetado por alterações no array original', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenate(test1, test2);
    test1.push(7);
    expect(result).toEqual([0, 1, [2], 3, 4, 5]);
  });

  test('concatenateWithConcat não deve ser afetado por alterações no array original', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenateWithConcat(test1, test2);
    test1.push(7);
    expect(result).toEqual([0, 1, [2], 3, 4, 5]);
  });

  test('concatenate deve manter elementos dentro de arrays aninhados', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenate(test1, test2);
    test1[2].push(7); // Modifica o array aninhado
    expect(result).toEqual([0, 1, [2, 7], 3, 4, 5]);
  });

  test('concatenateWithConcat deve manter elementos dentro de arrays aninhados', () => {
    const test1 = [0, 1, [2], 3];
    const test2 = [4, 5];
    const result = concatenateWithConcat(test1, test2);
    test1[2].push(7); // Modifica o array aninhado
    expect(result).toEqual([0, 1, [2, 7], 3, 4, 5]);
  });
});
