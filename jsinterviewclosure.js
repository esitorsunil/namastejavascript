//closure eg
function outest(){
    var c = 20;
function outer(b) {
    
    function inner() {
        console.log(a, b, c);
    }
    let a = 10;
    return inner;
}
    return outer;
}
//let a = 100; it still 10 if 10 is not in above code it gives 100, if both are not there it gives refernece errorś
var close = outest()("hello world"); // 10
close();




//data privacy in closure 

function counter() {
    var count = 0;
    return function incrementCounter() {
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1(); //1
counter1();// 2
counter1();// 3

var counter2 = counter();
counter2();// 1 it starts from new it independenr of counter1
counter2();// 2
counter2();// 3



// function constructor eg good way to write code
function Counter() {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }
    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}

var counter1 = new Counter();
counter1.incrementCounter(); //1
counter1.incrementCounter(); //2
counter1.decrementCounter(); //1


//garbage collection
function a(){
    var x =10, z= 100; 
    return function b(){
        console.log(x); //z is smartly garbage collected
    }
}

var y = a();

//.....thousand line of code ...memory leak

y(); //can access x