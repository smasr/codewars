/*Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.*/



function reverseWords(str) {
    // Go for it
    //this is a simple split reverse join,but you have to do it 2 times b/c the secod time you are doing it on the word 
    //rather the the characters 
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
  
  
    
  }