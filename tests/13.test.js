// Importando as funções do arquivo 13.js
const { showPattern, showReversePattern, showFullPattern } = require('../resolucoes/13');

describe('Testes para o padrão de asteriscos', () => {
    let consoleSpy;

    beforeEach(() => {
        // Espiando o console.log para verificar as saídas
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('showPattern deve imprimir o padrão crescente de asteriscos', () => {
        const N = 4;
        showPattern(N);
        
        // Verificando se os padrões de asteriscos foram chamados corretamente
        expect(consoleSpy).toHaveBeenCalledWith('*');
        expect(consoleSpy).toHaveBeenCalledWith('**');
        expect(consoleSpy).toHaveBeenCalledWith('***');
        expect(consoleSpy).toHaveBeenCalledWith('****');
    });

    test('showReversePattern deve imprimir o padrão decrescente de asteriscos', () => {
        const N = 4;
        showReversePattern(N);

        // Verificando se os padrões de asteriscos foram chamados corretamente
        expect(consoleSpy).toHaveBeenCalledWith('****');
        expect(consoleSpy).toHaveBeenCalledWith('***');
        expect(consoleSpy).toHaveBeenCalledWith('**');
        expect(consoleSpy).toHaveBeenCalledWith('*');
    });

    test('showFullPattern deve imprimir o padrão completo (crescente e decrescente)', () => {
        const N = 4;
        showFullPattern(N);

        // Verificando se o padrão completo foi impresso corretamente
        expect(consoleSpy).toHaveBeenCalledWith('*');
        expect(consoleSpy).toHaveBeenCalledWith('**');
        expect(consoleSpy).toHaveBeenCalledWith('***');
        expect(consoleSpy).toHaveBeenCalledWith('****');
        expect(consoleSpy).toHaveBeenCalledWith('***');
        expect(consoleSpy).toHaveBeenCalledWith('**');
        expect(consoleSpy).toHaveBeenCalledWith('*');
    });
});
