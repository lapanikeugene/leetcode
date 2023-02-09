/**
 * @param {number} x
 * @return {number}
 * Given a signed 32-bit integer x, return x with its digits reversed. 
 * If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Runtime: 84 ms
 */
var reverse = function(x) {
    let result = 0 
    
    while(x!==0){
        //move last digit to the left => 1 becomes 10
        result = result * 10;
        //get the last digit from x; 
        result +=x%10;
        //remove last digit from x; 
        x=Math.trunc(x/10);
    }

    // |0 is mask that set all fractional part to 0 
    // check after masking if result is 32 bit integer (+32  and -32 bits) and equal original value
    // othervise return 0; 

    return (result | 0 ) === result ? result : 0; 
};