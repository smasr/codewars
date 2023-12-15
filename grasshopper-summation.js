/*Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)*/


//Im sure there is a formula but for the time being I am gonna do via loop
var summation = function (num) {
    // make a loop that go to num and add its value
    let sum =0
    for(let n=1; n<=num; n++){
      sum = sum+n
    }
    return sum
  }