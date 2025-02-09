// func along with its lexical environment is called closure
function x(){
    var a = 7;
    function y(){
        console.log(a); //7
        
    }
     y();
     //return y       //or return function y(){console.log(a)} is same thing
}
x()
// var z = x(); //when we return y then x is gone not even in call stack
// console.log(z); // gives y function() = {console.log(a)}
// ..... thousand line of code

// z(); gives 7 in console.log(z) in above code



//corner cases

// function y(){ console.log(a); }
// a=100; retuen y; ....console.log(z); z() //gives 100 in console
//}



//Uses of closure
//1. module design pattern
//2. Currying
//3. Memoization
//4. Function like once
//5. maintaing state in async world
//6. setTimeout
//7. Iterators
// ....many more