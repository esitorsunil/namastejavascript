console.log(b); //undefined
console.log(a); //cannot access a before initialization (Reference Error)

let a = 10
console.log(a); //10
//let a= 100 gives = SyntaxError: Identifier 'a' has already been declared. wont execute single line code
var b = 20
var b = 30 // possible var not possible in let

let c;
c= 100;
console.log(c);  //const c; c=100;  cannot do this in const syntax error


const d = 100;
console.log(d);
 //d = 200; //TypeError: Assignment to constant variable.


console.log(y); //is not defined Reference Error    

//const is best one , if not const use let