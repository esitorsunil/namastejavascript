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