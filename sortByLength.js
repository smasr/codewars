/*Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:*/


function sortByLength (array) {

    //this is a easy sorted function based on the smalles to biggest length 
      return array.sort((a,b)=> a.length-b.length)
    
  }