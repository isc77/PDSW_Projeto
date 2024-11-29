// Importando a função do arquivo 20.js
const isPalindrome = require("../resolucoes/20");

// Testando a função isPalindrome
describe("isPalindrome", () => {
    test("deve retornar true para uma palavra palíndroma (ex: 'arara')", () => {
        expect(isPalindrome("arara")).toBe(true);
    });

    test("deve retornar false para uma palavra não-palíndroma (ex: 'banana')", () => {
        expect(isPalindrome("banana")).toBe(false);
    });

    test("deve retornar true para uma frase palíndroma com espaços e caracteres especiais (ex: 'A man, a plan, a canal, Panama')", () => {
        expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
    });

    test("deve retornar false para uma frase não-palíndroma (ex: 'Hello, world!')", () => {
        expect(isPalindrome("Hello, world!")).toBe(false);
    });

    test("deve retornar true para uma palavra palíndroma em letras maiúsculas (ex: 'RADAR')", () => {
        expect(isPalindrome("RADAR")).toBe(true);
    });

    test("deve retornar true para uma string vazia", () => {
        expect(isPalindrome("")).toBe(true);  // Palíndromo também é considerado uma string vazia.
    });
});
