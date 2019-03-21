'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 * très utile à retravailler et tester avec for ... each ;
 */

let sentence = "function that takes a string as parameter and return the string with each words capitilized."

function jadenCase(string) {
    let words = '';
    let result = []; //création d'un tableau vide
    words = string.split(' ');

    for(let i=0; i < words.length ; i++) {
        let word = words[i].split('');
        word[0] = word[0].toUpperCase();
        word =word.join('');
        result.push(word);
    }


    return result.join(' ');
}
console.log(jadenCase(sentence));

//* Begin of tests
const assert = require('assert')
//assert.fail('You must write your own tests')
// End of tests */
