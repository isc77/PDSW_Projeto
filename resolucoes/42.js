/*
    Desafio 42 - Simulação resposta API
*/

function fakeAPI(value, delay) {
    return new Promise((resolve, _) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

async function callAPI() {
    const value = await fakeAPI(4, 2000);  
    console.log(value);
}

// Exporta a função para uso em testes
    module.exports = { fakeAPI };
