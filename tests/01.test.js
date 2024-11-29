// Importando as funções do arquivo 01.js
const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../resolucoes/01');
describe('Funções de conversão de temperatura', () => {
    test('Deve converter Celsius para Fahrenheit corretamente', () => {
        expect(celsiusToFahrenheit(0)).toBe(32); // Congelamento da água
        expect(celsiusToFahrenheit(100)).toBe(212); // Ponto de ebulição da água
        expect(celsiusToFahrenheit(-40)).toBe(-40); // Valor idêntico em ambas as escalas
        expect(celsiusToFahrenheit(37)).toBeCloseTo(98.6); // Temperatura do corpo humano
    });

    test('Deve converter Fahrenheit para Celsius corretamente', () => {
        expect(fahrenheitToCelsius(32)).toBe(0); // Congelamento da água
        expect(fahrenheitToCelsius(212)).toBe(100); // Ponto de ebulição da água
        expect(fahrenheitToCelsius(-40)).toBe(-40); // Valor idêntico em ambas as escalas
        expect(fahrenheitToCelsius(98.6)).toBeCloseTo(37); // Temperatura do corpo humano
    });

    test('Deve lidar com valores decimais corretamente', () => {
        expect(celsiusToFahrenheit(25.5)).toBeCloseTo(77.9);
        expect(fahrenheitToCelsius(77.9)).toBeCloseTo(25.5);
    });
});
