'use strict'


 function total (table){

    var number = table.length;
    var somme = 0;
    for(let i= 0 ; i<number; i++)
        somme += table[i];
    return somme;
}

/* Pourquoi ça ne marche pas comme ça ?   à demander demain 

function total (table){

    var number = table.length;
    var somme = 0;
    for(i= 0 ; i<number; i++)
        somme += table[i];
    return somme;
}*/

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([ 1, 1, 1]), 3)
assert.deepStrictEqual(total([ 10, 10, 10]), 30)
assert.deepStrictEqual(total([ 24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
