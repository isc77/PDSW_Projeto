/*
    Desafio 06 - Faixa etária
*/

function getAgeGroup(age) {
    if (age < 0) {
        console.log('Idade inválida');
        return null;
    }

    if (age <= 12) {
        return 'criança';
    } 
    if (age <= 17) {
        return 'adolescente';
    } 
    if (age <= 59) {
        return 'adulta';
    } 
    return 'idosa';
}
// Exportando a função para ser usada nos testes
module.exports = { getAgeGroup };
