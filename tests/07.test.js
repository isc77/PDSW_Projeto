// Importando as funções do arquivo 07.js
const { compareNumbers } = require('../resolucoes/07'); // Ajuste o caminho conforme necessário

describe('compareNumbers', () => {
  it('deve retornar "igual" quando os números forem iguais', () => {
    expect(compareNumbers(10, 10)).toBe('igual');
  });

  it('deve retornar "menor" quando o primeiro número for menor', () => {
    expect(compareNumbers(-8, 10)).toBe('menor');
  });

  it('deve retornar "maior" quando o primeiro número for maior', () => {
    expect(compareNumbers(10, -8)).toBe('maior');
  });
});
