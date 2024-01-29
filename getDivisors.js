/*Count the number of divisors of a positive integer n.

Random tests go up to n = 500000.

Examples (input --> output)*/

function getDivisorsCnt(n){
    // todo
  //create final counter 
    let finalCount =0;
  //need to run for loop up until n and check if its divisiable by the number 
    for(let i=1; i<=n; i++){
      if (n%i==0){
          finalCount++
          }
    }
    return finalCount
}