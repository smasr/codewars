/*Given a string str, reverse it and omit all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str
A string consists of lowercase latin letters, digits and symbols.

[output] a string*/




function reverseLetter(str) {
    //coding and coding..
    //first take out any numbers 
    let str2= str.replace(/[0-9]/g, '').replace(/[^a-z0-9]/g, '')
    console.log(str2)
    //do split reverse and join to reverse the string 
    return(str2.split('').reverse().join(''))
   
  }