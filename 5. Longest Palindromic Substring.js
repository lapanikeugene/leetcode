/**
 * @param {string} s
 * @return {string}
 * 
 * We first create a 2D table to store the Boolean values for each substring. 
 * This table will have n rows and n columns, where n is the length of the input string.

    We mark every string with length 1 as a palindrome, by setting the corresponding entries in the table to true.

    We then check for palindromic substrings of length 2. 
    For each pair of adjacent characters in the input string, 
    if they are the same, we mark the corresponding entry in the table as true.

    We initialize two variables, start and maxLen, to keep track of the starting index 
    and length of the longest palindromic substring found so far.

    We then check for palindromic substrings of length greater than 2. 
    We use two nested loops to iterate over all possible substrings of length 3 or greater, 
    and for each substring, we check if its first and last characters are the same, 
    and if the substring between them is itself a palindrome 
    (as indicated by the entries in the table). 
    If both of these conditions are true, we mark the corresponding entry 
    in the table as true and update the start and maxLen variables 
    if the length of this substring is greater than the current maximum length.

    Finally, we return the longest palindromic substring found, 
    which can be obtained by taking a substring of the input 
    string starting at the start index and with length maxLen.
 */
function longestPalindrome(s) {
    const n = s.length;
    const table = Array(n)
      .fill(false)
      .map(() => Array(n).fill(false));
    //   appple
    /*   [0][0]= 
    */
  
    // every string with length 1 is a palindrome
    for (let i = 0; i < n; i++) {
      table[i][i] = true;
    }
  
    let start = 0;
    let maxLen = 1;

    // check for substrings of length 2
    for (let i = 0; i < n - 1; i++) {
      if (s[i] === s[i + 1]) {
        table[i][i + 1] = true;
        start = i;
        maxLen = 2;
      }
    }
  
    // check for substrings of length greater than 2
    for (let len = 3; len <= n; len++) {
        //every substring
      for (let i = 0; i <= n - len; i++) {
        const j = i + len - 1;
        if (s[i] === s[j] && table[i + 1][j - 1]) {
          table[i][j] = true;
          if (len > maxLen) {
            start = i;
            maxLen = len;
          }
        }
      }
    }
  
    return s.substring(start, start + maxLen);
  }