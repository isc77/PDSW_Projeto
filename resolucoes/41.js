/*
    Desafio 41 - Execução condicional com callbacks
*/

function verifyAndExecute(validate, fulfill, reject) {
    if (validate()) return fulfill();
    return reject();
}

const validIntegers = (x, y) => { return Number.isInteger(x) && Number.isInteger(y) }
const add = (x, y) => { return x + y }
const concatenate = (x, y) => { return `${x} and ${y}` }

// Exporta a função para uso em testes
module.exports = {
    verifyAndExecute,
    validIntegers,
    add,
    concatenate
};
