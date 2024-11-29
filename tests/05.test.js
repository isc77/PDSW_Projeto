// Importando as funções do arquivo 05.js
const { isDivisible } = require('../resolucoes/05');  

describe('Testes da função isDivisible', () => {
  // Testa quando a divisão é exata
  test('Deve retornar true quando x é divisível por y', () => {
    expect(isDivisible(10, 2)).toBe(true);  // 10 é divisível por 2
    expect(isDivisible(20, 5)).toBe(true);  // 20 é divisível por 5
  });

  // Testa quando a divisão não é exata
  test('Deve retornar false quando x não é divisível por y', () => {
    expect(isDivisible(10, 3)).toBe(false);  // 10 não é divisível por 3
    expect(isDivisible(7, 3)).toBe(false);   // 7 não é divisível por 3
  });

  // Testa com números negativos
  test('Deve funcionar com valores negativos', () => {
    expect(isDivisible(-10, 2)).toBe(true);  // -10 é divisível por 2
    expect(isDivisible(-10, 3)).toBe(false); // -10 não é divisível por 3
  });

  // Testa quando x é zero
  test('Deve retornar true para x igual a 0', () => {
    expect(isDivisible(0, 2)).toBe(true);    // 0 é divisível por 2
  });

  // Testa quando y é zero
  test('Deve retornar false para y igual a 0', () => {
    expect(isDivisible(10, 0)).toBe(false);  // Divisão por zero não é permitida, retorna false
  });

  // Testa caso em que x e y são iguais
  test('Deve retornar true quando x é igual a y', () => {
    expect(isDivisible(5, 5)).toBe(true);    // 5 é divisível por 5
  });

  // Testa casos com números negativos e zero
  test('Deve retornar true quando x é divisível por y com números negativos', () => {
    expect(isDivisible(-20, -5)).toBe(true);  // -20 é divisível por -5
  });
});
