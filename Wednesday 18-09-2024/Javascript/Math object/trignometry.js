// --arc cos()
let x = Math.acos(2)
console.log(x);
// -1 output PI, 2 output NaN

// ---- arc cosh()
let a = Math.acosh(1)
console.log(a);
// output 0

// cosine radian 
function cosine(degree){
    let x = degree*Math.PI/180
    return x.toFixed(2)
}
console.log(cosine(180));
// return 3.14

