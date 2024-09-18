
// find half value
Number.prototype.myfunc=function(){
    return this.valueOf()/2
}
let x = 402
let half = x.myfunc()
console.log(half);
// return 201

// find percentage
Number.prototype.percentage = function(){
    return this *100/1200
}
let a = 730
let b = a.percentage()
let c = b.toFixed(2)
console.log(c+'%' );

// return percentage 60.83%