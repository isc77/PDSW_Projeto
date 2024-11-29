/*
    Desafio 01 - Conversão de temperatura 
*/

//--- Funções de conversão
const celsiusToFahrenheit = (temperature) => {
    return (temperature * 9 / 5) + 32;
};

const fahrenheitToCelsius = (temperature) => {
    return (temperature - 32) * 5 / 9;
};

// Exportando as funções para possível reutilização em outros módulos
module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius
};
