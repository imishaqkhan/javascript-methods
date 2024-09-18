let fruits = new Map()
   fruits.set('graps',200)
   fruits.set('banana',100)
   fruits.set('apple',150)
    
let val = fruits.get('apple')
 console.log(val);
//output 150 

//  let clear = fruits.clear
//  console.log(clear); output fuction : clear
//fruits.delete('graps')
//console.log(fruits.size);
//output 2
let entries = ''
for ( const x of fruits.entries() ){
    entries += x + '\n'
}

// console.log(entries);
//output graps,200 banana,100 apple,150

let foreach =''
 fruits.forEach(function(key,value){
  foreach += value +'='+ key +'\n'
})
console.log(foreach);
