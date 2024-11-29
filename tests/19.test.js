// Importando as funções do arquivo 19.js
const { countVowels } = require('../resolucoes/19'); 

describe('Função countVowels', () => {
    test('Deve contar as vogais corretamente em uma string', () => {
        expect(countVowels("A eiou aei ou ae Io U aeio U")).toBe(19); // Exemplo de teste com contagem esperada
    });

    test('Deve retornar 0 quando não houver vogais', () => {
        expect(countVowels("BBBBB")).toBe(0); // Teste com string sem vogais
    });

    test('Deve contar as vogais em uma string com letras maiúsculas e minúsculas', () => {
        expect(countVowels("AEIOUaeiou")).toBe(10); // Teste com vogais maiúsculas e minúsculas
    });

    test('Deve retornar 0 para uma string vazia', () => {
        expect(countVowels("")).toBe(0); // Teste para string vazia
    });

    test('Deve tratar corretamente texto com caracteres especiais', () => {
        expect(countVowels("AEIOU!@#$%aeiou")).toBe(10); // Teste com caracteres especiais
    });
});
