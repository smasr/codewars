/*Task:
Your task is to write a function which returns the sum of following series upto nth term(parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
Rules:
You need to round the answer to 2 decimal places and return it as String.

If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> */



function SeriesSum(n)
{
  var sum =0
  //add the value while increaseing the denominator by 3 
  for(let i=0; i<n; i++) {
   sum += 1/(1 + (i*3)) 
  }

  //setting the decimal place 2 
  return sum.toFixed(2)
  // Happy Coding ^_^
}