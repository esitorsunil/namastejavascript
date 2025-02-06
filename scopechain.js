function a(){
    //var b = 20; still we can access b
    c();
    function c(){
        
    }
    console.log(b);
}
var b = 10;
a();

// console(b) when var b =10 inside a function we cannot defined b , b is not defined. here scope comes into the picture