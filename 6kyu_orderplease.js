/*Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""*/

function order(words){
    // ...
    //split the string into different words
    let split1 = words.split(" ")
    //You are going to store the values into a new arrary to make it easier to push and sort 
    let arr=[]
    //testing purposes
    console.log(split1.length)
    //Use this to figure out which number is in each word 
    for(let n =0 ; n<split1.length; n++ ){
        let wordnumber=split1[n].split('').find(num => parseInt(num))
        //once you figure out the number push that value with the word into the new array 
        arr.push([split1[n],wordnumber])
    }
  // create new sorted array based on the number value 
   let newArr= arr.sort((a,b)=>a[1]-b[1])
    console.log(newArr)
    //I cannot get it to work using splice I am gonna just loop it 
    let newArr2=[];
    for(let n =0 ; n<split1.length; n++ ){
      newArr2.push(newArr[n][0])
    }
    return newArr2.join(' ')
  
  }