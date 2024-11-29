// Importando a função do arquivo 41.js
const { verifyAndExecute, validIntegers, add, concatenate } = require('../resolucoes/41');

describe('verifyAndExecute function', () => {
    it('should execute fulfill callback if validIntegers returns true', () => {
        const mockFulfill = jest.fn();
        const mockReject = jest.fn();

        // Teste com inteiros válidos
        expect(verifyAndExecute(
            () => validIntegers(5, 6), 
            mockFulfill,
            mockReject
        )).toBeUndefined();  // A função não retorna nada

        expect(mockFulfill).toHaveBeenCalledTimes(1);
        expect(mockReject).not.toHaveBeenCalled();
    });

    it('should execute reject callback if validIntegers returns false', () => {
        const mockFulfill = jest.fn();
        const mockReject = jest.fn();

        // Teste com valores não inteiros
        expect(verifyAndExecute(
            () => validIntegers('5', '6'),  // Passando strings em vez de inteiros
            mockFulfill,
            mockReject
        )).toBeUndefined();  // A função não retorna nada

        expect(mockFulfill).not.toHaveBeenCalled();
        expect(mockReject).toHaveBeenCalledTimes(1);
    });
});

describe('validIntegers function', () => {
    it('should return true for valid integers', () => {
        expect(validIntegers(5, 6)).toBe(true);
    });

    it('should return false for invalid integers', () => {
        expect(validIntegers('5', 6)).toBe(false);
        expect(validIntegers(5, '6')).toBe(false);
        expect(validIntegers('5', '6')).toBe(false);
    });
});

describe('add function', () => {
    it('should return the sum of two numbers', () => {
        expect(add(5, 6)).toBe(11);
    });
});

describe('concatenate function', () => {
    it('should return the concatenation of two strings', () => {
        expect(concatenate('hello', 'goodbye')).toBe('hello and goodbye');
    });
});
