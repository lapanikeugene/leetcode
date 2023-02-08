//Runtime: 91 ms


const toRomanNumerals = (num)=>{
    //roman and decimals have equal amount in different types of counting.  
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    const decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = ""

    // i will be numerator in both arrays. 
   for(let i=0;i< decimals.length;i++){


        while(num>=decimals[i]){

            result+=roman[i]; // add letters to string
            num-=decimals[i]; // subtract amount from param num. 
        }

   }

   return result;


}