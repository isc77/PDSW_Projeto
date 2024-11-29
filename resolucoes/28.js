/*
    Desafio 28 - Filtrando propriedades de um objeto
*/

const obj = {
    "age": 32,
    "height": 176,
    "weight": 68,
    "score": 87,
    "temperature": 23
};

const props = ['age', 'score', 'temperature', 'oi']

const obj2 = {
    oi: 1,
    tudo: 2,
    bem: 3
};

function ShowValues(object, props) {
    props.map(prop => {
        if (object.hasOwnProperty(prop)) {
            console.log(`Propriedade ${prop}, valor ${object[prop]}.`)
        } else {
            console.log(`A propriedade ${prop} não existe no objeto.`)
        }
    })
}

// Exporte a função para que possa ser testada
module.exports = ShowValues;