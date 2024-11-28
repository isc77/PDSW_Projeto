function showResult(age, isStudentChecked) {
    const result = computeFee(age, isStudentChecked);
    console.log(`Valor da tarifa: ${result}`);
}

function computeFee(age, isStudent) {
    const fee = 2.5;

    if (isFreeFee(age)) return "Grátis";

    // Precedência ao desconto de estudante
    if (isStudent) return fee * 0.5;

    if (isElder(age)) return fee * 0.7;

    return fee.toFixed(2);
}

function isFreeFee(age) {
    if (age <= 6) return true;
    return false;
}

function isElder(age) {
    if (age >= 60) return true;
    return false;
}

// Simulando entradas
const age = 25; // Exemplo de idade
const isStudentChecked = true; // Exemplo de estudante

// Calculando a tarifa
showResult(age, isStudentChecked);
