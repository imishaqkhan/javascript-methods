// convert numnrt to local string

let n = 10000000

let text = n.toLocaleString( 'en-US',{style :'currency',currency : 'USD'})

console.log(text);

// return $10,000,000.00

let num = new Number(20000000)
const object ={
    style:'currency',
    currency :'EUR'
}
let value = num.toLocaleString('en-GB',object)
console.log(value);
// return $20,000,000.00
