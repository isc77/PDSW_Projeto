/*
    Desafio 22 - Elemento mais frequente
*/

const randomNumbersArray = require("./21");

function mostFrequentElement(array) {
    // start the variables with the first element in the array
    let mostFrequent = array[0];
    let currentElementInspected = array[0];
    let currentFrequency = 1;
    let biggestFrequency = 1;

    for (let i = 1; i < array.length; i++) {
        const element = array[i];        
        if (element === currentElementInspected) {
            currentFrequency++;
        } else {            
            if (biggestFrequency < currentFrequency) {
                // update biggest frequency
                biggestFrequency = currentFrequency;
                mostFrequent = currentElementInspected;
            }
            // restart the count for the new element
            currentFrequency = 1;
            currentElementInspected = element;
        }
    }
    return [mostFrequent, biggestFrequency];
}

// Exporte a função para que possa ser testada
module.exports = mostFrequentElement;
