//*Given a string s, find the length of the longest  substring without repeating characters.
//* N(O)

var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
 let start = 0;
 const charMap = new Map(); // To store the last seen index of a character

 for (let i = 0; i < s.length; i++) {
   const currentChar = s[i];

   if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
     // If the current character has been seen before and its last seen index is after the start of the current substring
     // we update the start to be one index after the last seen index of the current character
     start = charMap.get(currentChar) + 1;
     //!! map contains not characters but indexes
   }

   // Update the last seen index of the current character
   charMap.set(currentChar, i);

   // Update the maxLength if the current substring is longer than the previous maxLength
   maxLength = Math.max(maxLength, i - start + 1);
 }

 return maxLength;
}