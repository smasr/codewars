
/*


Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F */

function abbrevName(name){
    //just split them by the first name and last name then get the firstcharater of each name using map 
    let nameSplit = name.split(" ").map((names)=>names[0].toUpperCase())
    console.log(nameSplit)
    //join them using .
    return nameSplit.join('.')
    
    }

