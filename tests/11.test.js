// Importando as funções do arquivo 11.js
const { showMultiplicationTable, N } = require('../resolucoes/11.js');  

describe('showMultiplicationTable', () => {
    it('deve imprimir a tabuada correta para o número fornecido', () => {
        // Spy para capturar a saída do console.log
        const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

        // Chama a função com o número 11
        showMultiplicationTable(N);

        // Verificando se o console.log foi chamado corretamente
        for (let i = 1; i < 11; i++) {
            expect(consoleSpy).toHaveBeenCalledWith(`${N} * ${i} = ${N * i}`);
        }

        // Limpa o spy após o teste
        consoleSpy.mockRestore();
    });
});
