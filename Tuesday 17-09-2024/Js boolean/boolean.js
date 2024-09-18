let bool= true
let text = bool.constructor
console.log(text);

// prototype 
Boolean.prototype.mypro = function(){
    if(this.valueOf()== true){return "blue"}
    else{
        return 'red'
    }
}
let a = false
let color = a.mypro()

console.log(color);
let b = bool.toString()
console.log(typeof 'b');
console.log(a.valueOf());




