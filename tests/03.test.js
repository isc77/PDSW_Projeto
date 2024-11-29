// 03.test.js
const fs = require('fs');
const path = require('path');

describe('Desafio 03 - Concatenação de strings', () => {
    test('Deve concatenar corretamente a mensagem', () => {
        // Simula os valores definidos no arquivo
        const name = 'Laura';
        const age = 28;
        const location = 'Penedo';

        // Concatenação esperada
        const expectedMessage = `${name} tem ${age} anos e mora em ${location}.`;

        // Importa e executa o arquivo para capturar o resultado do console
        const scriptPath = path.resolve(__dirname, '../resolucoes/03.js'); // Caminho corrigido
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        require(scriptPath);
        expect(consoleSpy).toHaveBeenCalledWith(expectedMessage);

        // Restaura o comportamento original do console.log
        consoleSpy.mockRestore();
    });
});
