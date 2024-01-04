/*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted).*/

function isTriangle(a,b,c)
{
  //first check to see if sides are greater than 0
  if(a<=0 | b<=0 | c<=0){
    return false;
  }
  // make sure the sum of 2 sides is greater than the 3rd side 
  if(a+b>c && a+c >b && c+b >a){
    return true 
  }
  else
    return false

}