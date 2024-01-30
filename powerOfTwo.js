/*Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).*/

function powersOfTwo(n){
    //create new array
    let final =[];
    //just have a loop that goes up to n and just add value to final every time loop runs
    
    for(let i=0; i<=n; i++){
      //just push the value to the final array
      final.push(Math.pow(2,i))
    }
    return final
  }