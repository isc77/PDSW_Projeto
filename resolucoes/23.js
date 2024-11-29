/*
    Desafio 23 - Remoção de elementos repetidos
*/

const chatGPTProvidedThis = [
    'apple', 'banana', 'orange', 'grape', 'kiwi',
    'mango', 'pear', 'peach', 'plum', 'strawberry',
    'watermelon', 'blueberry', 'cherry', 'pineapple', 'lemon',
    'lime', 'raspberry', 'blackberry', 'pomegranate', 'apricot',
    'coconut', 'fig', 'guava', 'honeydew', 'mandarin',
    'nectarine', 'papaya', 'passionfruit', 'persimmon', 'quince',
    'rhubarb', 'tangerine', 'cantaloupe', 'dragonfruit', 'elderberry',
    'gooseberry', 'kumquat', 'lychee', 'mulberry', 'olive',
    'pawpaw', 'plantain', 'soursop', 'ugli', 'yuzu',
    'zucchini', 'avocado', 'tomato', 'potato', 'carrot',
    'apple', 'banana', 'orange', 'grape', 'kiwi'
];

const test = ['Matheus', 'Matheus', 'Matheus', 'Matheus', 'Matheus', 'Ricardo', 'Matheus', 'Matheus', 'Matheus', 'Matheus', 'Ricardo', 'Matheus', 'Ricardo', 'Ricardo', 'Zingarelli', 'Matheus', 'Ricardo', 'Uihara', 'Zingarelli', 'Maatheus'];

function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.lastIndexOf(item) === index);
}

function removeDuplicatesUsingSet(arr) {
    return Array.from(new Set(arr));
}

// Exporte a função para que possa ser testada
module.exports = { removeDuplicates, removeDuplicatesUsingSet };
