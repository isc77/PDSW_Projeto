// Importando a função do arquivo 18.js
const reverse = require('../resolucoes/18');

// Descrição dos testes
describe('Função reverse', () => {
  // Teste básico para verificar se a string é invertida corretamente
  it('deve inverter a string corretamente', () => {
    expect(reverse('abc')).toBe('cba');
  });

  // Teste para string com letras maiúsculas (verifica se a função lida com caixa baixa)
  it('deve inverter a string e converter para minúsculas', () => {
    expect(reverse('ABC')).toBe('cba');
  });

  // Teste para string vazia
  it('deve retornar uma string vazia quando a entrada for vazia', () => {
    expect(reverse('')).toBe('');
  });

  // Teste para string com espaços
  it('deve inverter a string com espaços corretamente', () => {
    expect(reverse('a b c')).toBe('c b a');
  });

  // Teste para string com caracteres especiais
  it('deve inverter a string com caracteres especiais corretamente', () => {
    expect(reverse('a@b#c$')).toBe('$c#b@a');
  });
});
