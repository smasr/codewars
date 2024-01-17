
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)*/

function getSum(a, b)
{
  // first we need to know the min and max
  let min = Math.min(a,b)
  let max = Math.max (a,b) 
//the formula to find the sum is (n/2) * (min+max) 
// n is calculated by max-min +1
  return ((max-min +1)/2) * (min+max) 
  
}