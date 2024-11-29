/*
    Desafio 02 - Cálculo IMC
*/

// Função para cálculo do IMC
const getIMC = (weight, heightInCm) => {
    const heightInMeters = heightInCm / 100; // Converte altura para metros
    return weight / (heightInMeters * heightInMeters);
};

// Exportando a função para uso em outros módulos, se necessário
module.exports = {
    getIMC,
};

