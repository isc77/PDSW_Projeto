// Mock para a função randomNumbersArray de 21.js
jest.mock("../resolucoes/21", () => jest.fn(() => [1, 2, 2, 3, 4, 2, 5]));

// Importando a função do arquivo 22.js
const mostFrequentElement = require("../resolucoes/22");

describe("Testa a função mostFrequentElement", () => {

    it("Deve retornar o elemento mais frequente e a frequência correta", () => {
        const array = [1, 2, 3, 2, 4, 2, 5];
        const [element, frequency] = mostFrequentElement(array);
        expect(element).toBe(2);  // O elemento mais frequente é o 2
        expect(frequency).toBe(3); // O 2 aparece 3 vezes
    });

    it("Deve retornar o primeiro elemento em caso de empate de frequências", () => {
        const array = [1, 1, 2, 2, 3, 3];
        const [element, frequency] = mostFrequentElement(array);
        expect(element).toBe(1);  // Em caso de empate, deve retornar o primeiro elemento
        expect(frequency).toBe(2); // Frequência de 1
    });

    it("Deve retornar o único elemento quando o array tiver apenas um item", () => {
        const array = [7];
        const [element, frequency] = mostFrequentElement(array);
        expect(element).toBe(7);  // O único elemento é o 7
        expect(frequency).toBe(1); // Aparece 1 vez
    });

    it("Deve funcionar com números negativos", () => {
        const array = [-1, -2, -2, -3, -2];
        const [element, frequency] = mostFrequentElement(array);
        expect(element).toBe(-2); // O elemento mais frequente é o -2
        expect(frequency).toBe(3); // O -2 aparece 3 vezes
    });

    it("Deve funcionar com array de números todos iguais", () => {
        const array = [5, 5, 5, 5, 5];
        const [element, frequency] = mostFrequentElement(array);
        expect(element).toBe(5);  // O elemento mais frequente é o 5
        expect(frequency).toBe(5); // O 5 aparece 5 vezes
    });

    it("Deve funcionar com números aleatórios gerados pela função randomNumbersArray", () => {
        const randomNumbers = require("../resolucoes/21")(); // Aqui usamos o mock
        const [element, frequency] = mostFrequentElement(randomNumbers);
        expect(frequency).toBeGreaterThan(0);  // A frequência deve ser maior que 0
    });

});
