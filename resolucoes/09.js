/*
    Desafio 09 - Cálculo de tarifa com base em idade e status de estudante
*/

function showResult(age, isStudentChecked) { 
    const result = computeFee(age, isStudentChecked);
    console.log(`Valor da tarifa: ${result}`);
}

function computeFee(age, isStudent) {
    const fee = 2.5;

    if (isFreeFee(age)) return "Grátis";
    if (isStudent) return fee * 0.5;
    if (isElder(age)) return fee * 0.7;

    return fee.toFixed(2);
}

function isFreeFee(age) {
    return age <= 6;
}

function isElder(age) {
    return age >= 60;
}

const age = 25; // Defina a idade desejada
const isStudentChecked = true; // Defina o status de estudante
const result = computeFee(age, isStudentChecked);
console.log(`Valor da tarifa: ${result}`);

// Exports das funções para testes
module.exports = { showResult, computeFee, isFreeFee, isElder };