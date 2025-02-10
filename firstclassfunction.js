a(); //namaste js
b(); //gives an error

//function statement is also known as function declaration
function a() {
    console.log("Namaste JS")
}
//difference between function statement and function expression is function statement is hoisted


//function expression ...func acts like a value
var b = function () {
    console.log("Namaste JS")
}

//Anonymous function is used when we used func as a value
//function () {
//}    this gives syntax error


//named function expression
var c = function a() {   //when we use name in function a() then it is named function expression
    console.log("Namaste JS") //we can a in console gives function
}
a(); //gives reference error


//Diff b/w parameter and argument
var d = function (param1, param2) { //parameter
    console.log("Namaste JS")
}
d(1,2) //argument


//First class function
// the ability to use a function as a value and passed into argument and return a function



//arrow function

var e = () => {
    console.log("Namaste JS")
}