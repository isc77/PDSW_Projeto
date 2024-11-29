// Importando a função do arquivo 28.js
const ShowValues = require('../resolucoes/28');  

describe('Testando ShowValues', () => {
    let consoleSpy;

    beforeEach(() => {
        // Espiando as chamadas ao console.log
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        // Restaurando o console.log original após cada teste
        consoleSpy.mockRestore();
    });

    it('Deve exibir as propriedades corretas para o objeto obj', () => {
        const obj = {
            "age": 32,
            "height": 176,
            "weight": 68,
            "score": 87,
            "temperature": 23
        };
        const props = ['age', 'score', 'temperature', 'oi'];

        ShowValues(obj, props);

        expect(consoleSpy).toHaveBeenCalledWith('Propriedade age, valor 32.');
        expect(consoleSpy).toHaveBeenCalledWith('Propriedade score, valor 87.');
        expect(consoleSpy).toHaveBeenCalledWith('Propriedade temperature, valor 23.');
        expect(consoleSpy).toHaveBeenCalledWith('A propriedade oi não existe no objeto.');
    });

    it('Deve exibir as propriedades corretas para o objeto obj2', () => {
        const obj2 = {
            oi: 1,
            tudo: 2,
            bem: 3
        };
        const props = ['age', 'score', 'temperature', 'oi'];

        ShowValues(obj2, props);

        expect(consoleSpy).toHaveBeenCalledWith('A propriedade age não existe no objeto.');
        expect(consoleSpy).toHaveBeenCalledWith('A propriedade score não existe no objeto.');
        expect(consoleSpy).toHaveBeenCalledWith('A propriedade temperature não existe no objeto.');
        expect(consoleSpy).toHaveBeenCalledWith('Propriedade oi, valor 1.');
    });
});
