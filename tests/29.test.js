// Importando a função do arquivo 29.js
const { concatenateObjects } = require('../resolucoes/29')

describe('concatenateObjects', () => {
    test('should merge properties of two objects', () => {
        const person = {
            age: 32,
            height: 176,
            weight: 68,
            score: 87,
            temperature: 23
        };
        
        const address = {
            street: '123 Main St',
            city: 'Exampleville',
            state: 'Samplestate',
            zip: '12345',
            country: 'Sampleland',
            temperature: 32
        };
        
        const result = concatenateObjects(person, address);

        // Verifique se as propriedades de person e address estão presentes
        expect(result).toHaveProperty('age', 32);
        expect(result).toHaveProperty('height', 176);
        expect(result).toHaveProperty('weight', 68);
        expect(result).toHaveProperty('score', 87);
        expect(result).toHaveProperty('temperature', 32);  // Verifique se o valor de temperature foi sobrescrito
        expect(result).toHaveProperty('street', '123 Main St');
        expect(result).toHaveProperty('city', 'Exampleville');
        expect(result).toHaveProperty('state', 'Samplestate');
        expect(result).toHaveProperty('zip', '12345');
        expect(result).toHaveProperty('country', 'Sampleland');
    });

    test('should give priority to properties of the second object', () => {
        const result = concatenateObjects(person, address);
        
        // Verifique se a propriedade temperature do segundo objeto foi priorizada
        expect(result.temperature).toBe(32);
    });
});