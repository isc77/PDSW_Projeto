// Importando a função do arquivo 39.js
const { executeAfterTimer } = require('../resolucoes/39')

describe('executeAfterTimer', () => {
    beforeEach(() => {
        jest.useFakeTimers(); // Habilita timers falsos para controlar o setTimeout
    });

    afterEach(() => {
        jest.runOnlyPendingTimers(); // Executa os timers pendentes
        jest.useRealTimers(); // Restaura os timers reais após cada teste
    });

    it('deve chamar a callback após o tempo especificado', () => {
        const callback = jest.fn(); // Cria uma função espiã para monitorar chamadas

        executeAfterTimer(2, callback); // Chama a função com 2 segundos

        expect(callback).not.toBeCalled(); // Verifica se a callback não foi chamada imediatamente

        jest.advanceTimersByTime(2000); // Avança os timers para 2 segundos

        expect(callback).toBeCalledTimes(1); // Verifica se a callback foi chamada uma vez
    });
});
