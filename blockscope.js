//What is block
if(true){
    //block is also known as compound
    var x = 10;
    console.log(x);
}  


//block scope
{
    var a = 20; //global scope
    let b = 30; //block scope
    const c = 40;//block scope
    console.log(a,b,c); //20,30,40
}

console.log(a) //20
console.log(b) //referemce error : b is not defined
console.log(c) //reference error : c is not defined


//shadowing
var a = 10;
var b = 40;
{
    var a = 20;
    var b = 30;
    console.log(a); //20
    console.log(b); //30
}
console.log(a); //20
console.log(b); //40 goes to script scope similar things happen to let and const

//ilegal shadowing
//let b = 40;
//{
//    var b = 30;
//    console.log(b); // error b is already defined
//}
//console.log(b); //40

//legal shadowing
var a = 10;
{
    let a = 20;
    console.log(a); //20
}

//block scope is also known as lexical scope
const a = 20;
{
    const a = 30;
    {
        const a = 40; //if this a is not here , it will be 30
        console.log(a); //40 const find nearest scope 
    }
    console.log(a); //30
}
console.log(a); //20