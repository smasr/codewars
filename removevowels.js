function disemvowel(str) {
    //we are going to use a replace to look for lower case and upper case vowels
    let str2= str.replace(/A|E|I|O|U|a|e|i|o|u/g, '')
    return str2;
  }