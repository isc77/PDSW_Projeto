// Importando a função do arquivo 23.js
const { removeDuplicates, removeDuplicatesUsingSet } = require('../resolucoes/23');

// Teste para a função removeDuplicates
describe('removeDuplicates', () => {
    it('should remove duplicate elements from an array', () => {
        const input = ['apple', 'banana', 'orange', 'apple', 'grape', 'kiwi', 'banana'];
        const expected = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
        expect(removeDuplicates(input)).toEqual(expected);
    });

    it('should handle an array with no duplicates', () => {
        const input = ['apple', 'banana', 'orange', 'grape'];
        const expected = ['apple', 'banana', 'orange', 'grape'];
        expect(removeDuplicates(input)).toEqual(expected);
    });

    it('should handle an array with all elements the same', () => {
        const input = ['apple', 'apple', 'apple'];
        const expected = ['apple'];
        expect(removeDuplicates(input)).toEqual(expected);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expected = [];
        expect(removeDuplicates(input)).toEqual(expected);
    });
});

// Teste para a função removeDuplicatesUsingSet
describe('removeDuplicatesUsingSet', () => {
    it('should remove duplicate elements from an array', () => {
        const input = ['apple', 'banana', 'orange', 'apple', 'grape', 'kiwi', 'banana'];
        const expected = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
        expect(removeDuplicatesUsingSet(input)).toEqual(expected);
    });

    it('should handle an array with no duplicates', () => {
        const input = ['apple', 'banana', 'orange', 'grape'];
        const expected = ['apple', 'banana', 'orange', 'grape'];
        expect(removeDuplicatesUsingSet(input)).toEqual(expected);
    });

    it('should handle an array with all elements the same', () => {
        const input = ['apple', 'apple', 'apple'];
        const expected = ['apple'];
        expect(removeDuplicatesUsingSet(input)).toEqual(expected);
    });

    it('should handle an empty array', () => {
        const input = [];
        const expected = [];
        expect(removeDuplicatesUsingSet(input)).toEqual(expected);
    });
});
