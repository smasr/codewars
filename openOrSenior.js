function openOrSenior(data){
    //we are going to spit of a new array so we use map 
    //in the map we are going to have a conditional to check for element[0]>55 and ele[1]>7
    return data.map(ele => (ele[0]>=55 && ele[1]>7)? "Senior":"Open" )
  }