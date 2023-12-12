DESCRIPTION:
/*You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.*/

//You have to sort the arry then check the final value to see if it is less than limit 
function smallEnough(a, limit){
    //sorting is done here 
    let sortarr = a.sort((a,b)=> a-b)
    //checking to see if the limit is bigger or not 
    if(sortarr[a.length-1] <= limit){
      return true
    }
    else{
      return false
    }
    
  
  }