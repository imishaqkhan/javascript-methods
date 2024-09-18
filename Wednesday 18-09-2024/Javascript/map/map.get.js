let fruits = new Map([
    ['banana',300],
    ['mango',200],
    ['orange',250] 
])
let result = fruits.get('mango')
console.log(result);
// output 200

// ----groupby method
let fruit = [
    {name:'apple' , quantity:'400'},
    {name:'orange' , quantity:'300'},
    {name:'mango' , quantity:'270'},
    {name:'onion' , quantity:'200'}
]

function myfunc({quantity}){
    return quantity > 250 ? 'ok' :'low'
}
// const value =Map.groupBy(fruit, myfunc)

// let text = 'these value are ok: "\n"'
// for(let x of value.get('ok')){
//     text += x.name + " " + x.quantity +'\n'
// }
//  text += '\n'+ "these value are low"
//  for(let x of value.get('low')){
//     text += x.name +" "+ x.quantity +'\n'
//  }
// console.log(value.get('ok'));


//---has method----

let hasvalue = fruits.has('banana')
console.log(hasvalue);
// output true

//---key method------
let keyvalue=''
for(let x of fruits.keys()){
    keyvalue += x +', '
} 
console.log(keyvalue);
//output banana, orange, mango

//----set method ----
let setvalue = fruits.set('graps',350)
console.log(fruits.get('graps'));
// output 350

//--size method ====
console.log(fruits.size);
// return 4

//---value method---
let values = ''
for(let x of fruits.values()){
    values += x +'\n'
}
console.log(values);
// output  300 200 250 350
