// Importando a função do arquivo 42.js
const { fakeAPI } = require('../resolucoes/42');  

describe('fakeAPI', () => {
    it('should resolve with the correct value after the specified delay', async () => {
        // Testa se a função resolve com o valor correto após o delay
        jest.useFakeTimers();  // Usar temporizadores falsos para controlar o delay
        
        const promise = fakeAPI(4, 2000);
        
        // Avança o tempo simulado para 2000 ms
        jest.advanceTimersByTime(2000);
        
        // Espera a Promise resolver e verifica o valor
        await expect(promise).resolves.toBe(4);
        
        jest.useRealTimers();  // Restaura os temporizadores reais
    });

    it('should resolve with a different value after the specified delay', async () => {
        jest.useFakeTimers();

        const promise = fakeAPI(5, 4000);
        jest.advanceTimersByTime(4000);

        await expect(promise).resolves.toBe(5);

        jest.useRealTimers();
    });
});
