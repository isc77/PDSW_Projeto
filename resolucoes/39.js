/*
    Desafio 39 - Temporizador personalizado
*/

function executeAfterTimer(seconds, callback) {
    console.log('wait for it...');
    setTimeout(callback, seconds * 1000);
}

// Exporta a função para uso em testes
module.exports = { executeAfterTimer };
