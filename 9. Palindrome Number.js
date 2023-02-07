// Given an integer x, return true if x is a 
// palindrome, and false otherwise.


/**
 * @param {number} x
 * @return {boolean}
 * 80ms
 */
var isPalindrome = function(x) {
    let a = String(x);
    let b = String(x).split('').reverse().join(''); // from string to array. reverse array. and join it to the string. 

    return a === b;

};




//74ms
function isPalindrome2(x) {
    // if below zero return not polyndrom, beacuse it has minus on the left side, 
    if (x < 0) {
        return false;
    }

    let reversed = 0;
    let original = x;
    while (x > 0) {
        //569 
        ///1. reversed =0 + 9;
        ///   x =  56
        ///2.   reversed = 90 + 6;
        ///   x = 5;
        ///3.   reversed = 960 + 5; // reversed number 
        ///   x = 0; // exit loop. 
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10); //always rounds down 
    }

    return reversed === original;
}