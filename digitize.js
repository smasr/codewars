//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    //We are going to use split reverse join. it only works on string 
  //so convert it to string first then we have to spit it out in a new array using map 
  //finally you have to make sure you convert it to numbers
    return n.toString().split('').reverse().map(Number)
  }