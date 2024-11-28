function showResult() {
    // Obter os valores de entrada
    const x = parseFloat(prompt('Digite o primeiro número:'));
    const operator = prompt('Escolha a operação (+, -, *, /):');
    const y = parseFloat(prompt('Digite o segundo número:'));
    
    // Calcular e mostrar o resultado
    const result = compute(x, y, operator);
    console.log(`Resultado: ${result}`);
}

function compute(x, y, operator) {
    switch (operator) {
        case '+':
            return x + y;
        case '-':
            return x - y;
        case '*':
            return x * y;
        case '/':
            if (y !== 0) {
                return (x / y).toFixed(2); // Limita o resultado da divisão a 2 casas decimais
            } else {
                return 'Erro: Divisão por zero';
            }
        default:
            return 'Operação inválida';
    }
}

// Chama a função para mostrar o resultado
showResult();
