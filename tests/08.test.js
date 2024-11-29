// Importando as funções do arquivo 08.js
const { showResult, compute } = require('../resolucoes/08');

// Testes para a função compute
describe('Testes da função compute', () => {
    test('Deve somar dois números corretamente', () => {
        expect(compute(2, 3, '+')).toBe(5);
    });

    test('Deve subtrair dois números corretamente', () => {
        expect(compute(5, 3, '-')).toBe(2);
    });

    test('Deve multiplicar dois números corretamente', () => {
        expect(compute(2, 3, '*')).toBe(6);
    });

    test('Deve dividir dois números corretamente', () => {
        expect(compute(6, 3, '/')).toBe('2.00');
    });

    test('Deve retornar erro ao dividir por zero', () => {
        expect(compute(6, 0, '/')).toBe('Erro: Divisão por zero');
    });

    test('Deve retornar erro para operação inválida', () => {
        expect(compute(6, 3, '%')).toBe('Operação inválida');
    });
});

// Testes para a função showResult
describe('Testes da função showResult', () => {
    // Mockando o prompt
    beforeEach(() => {
        global.prompt = jest.fn();
        global.console.log = jest.fn();
    });

    test('Deve mostrar o resultado da soma corretamente', () => {
        prompt.mockImplementationOnce(() => '2'); // Primeiro número
        prompt.mockImplementationOnce(() => '+'); // Operação
        prompt.mockImplementationOnce(() => '3'); // Segundo número

        showResult();

        expect(console.log).toHaveBeenCalledWith('Resultado: 5');
    });

    test('Deve mostrar o resultado da divisão corretamente', () => {
        prompt.mockImplementationOnce(() => '6'); // Primeiro número
        prompt.mockImplementationOnce(() => '/'); // Operação
        prompt.mockImplementationOnce(() => '3'); // Segundo número

        showResult();

        expect(console.log).toHaveBeenCalledWith('Resultado: 2.00');
    });

    test('Deve mostrar erro de divisão por zero', () => {
        prompt.mockImplementationOnce(() => '6'); // Primeiro número
        prompt.mockImplementationOnce(() => '/'); // Operação
        prompt.mockImplementationOnce(() => '0'); // Segundo número

        showResult();

        expect(console.log).toHaveBeenCalledWith('Resultado: Erro: Divisão por zero');
    });
});
