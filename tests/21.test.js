// Importando a função do arquivo 21.js
const randomNumbersArray = require('../resolucoes/21');

describe('randomNumbersArray', () => {
  test('deve retornar um array', () => {
    const result = randomNumbersArray(5, 1, 10);
    expect(Array.isArray(result)).toBe(true);
  });

  test('deve retornar um array com o número correto de elementos', () => {
    const quantity = 5;
    const result = randomNumbersArray(quantity, 1, 10);
    expect(result.length).toBe(quantity);
  });

  test('deve gerar números dentro do intervalo especificado', () => {
    const quantity = 100;
    const min = 1;
    const max = 10;
    const result = randomNumbersArray(quantity, min, max);
    result.forEach(num => {
      expect(num).toBeGreaterThanOrEqual(min);
      expect(num).toBeLessThan(max);
    });
  });

  test('deve gerar números aleatórios', () => {
    const result1 = randomNumbersArray(10, 1, 10);
    const result2 = randomNumbersArray(10, 1, 10);
    expect(result1).not.toEqual(result2);  // Espera-se que o array seja diferente
  });
});
