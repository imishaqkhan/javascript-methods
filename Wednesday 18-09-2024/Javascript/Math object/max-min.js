// find maximum value
let number = [1,2,3,4,67,56,35,3,3,33,556,7743]
let max = Math.max(...number)
console.log(max);
 // return 7743
const person = [
    {name:'ali',age:24},
    {name:'abbas',age:21},
    {name:'ishaq',age:23}
]
let maxage = person.reduce((pre,curr) =>(curr.age > pre ? curr.age:pre ),-Infinity)
console.log(maxage);
// return 24


// find minimum value
let min = Math.min(...number)
console.log(min);
// return 1

let object = [
    {item : 'ball',price : 1200},
    {item : 'bat', price : 3000},
    {item : 'wicket',price : 1500}
]
let minprice = object.reduce((pre,curr) => (curr.price < pre ? curr.price:pre),Infinity)
console.log(minprice);
