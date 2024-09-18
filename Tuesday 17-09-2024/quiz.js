// let arrayOne = [1,2,4,5,11,22,6,7,8,9,10] // find mid value

let arraySecond = [2,10,2,3,1,4,5,6] // find highest value and smallest value

// function findMidValue(items){
//     let length =  items.length;

//     let half = length/2;

//     let index = parseInt(half);

//     console.log(items[index]);
// }

// findMidValue(arrayOne);

function highest(arraySecond){
    let highestvalue = arraySecond[0]

for(let i =0 ;i < arraySecond.length;i++){

    if(arraySecond[i] > highestvalue){
        highestvalue = arraySecond[i]
    }
}
return highestvalue;
// console.log(highestvalue);
}


console.log(highest(arraySecond))


let arr = [10,2,3,1,4,5,6]
let lowestvalue = arr[0]

for( let i=0; i < arr.length;i++){
    if(arr[i] < lowestvalue){
        lowestvalue = arr[i]
    }
    
}
console.log(lowestvalue); 