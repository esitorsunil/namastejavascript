"use strict";

//1.this in global space - window, global(node)
console.log(this);

//2.this in function - works differently in strict / non-strict mode
function x(){
    console.log(this);
}
x();

window.x() //now it is called window object

//3. this in object's method
const obj = {
    a : 10,
    x: function(){
        console.log(this);
    }
}
obj.x();

//4. this in call, apply, bind - sharig methods (overrides)

const obj1 = {
    name: "Sunil",
    studentName: function(){
        console.log(this.name)
    }
}
obj1.studentName()

const obj2 = {
    name: "Mohd",
}
obj1.studentName.call(obj2)

//5. this in arrow function - (enclosing lexical context)

const object = {
    b: 10,
    x: () => {
        console.log(this);
    }
}
object.x();

//5. this in nested arrow function

const object2 = {
    b: 10,
    y: function(){
       const x = () => {
            console.log(this);
        }
        x();
    }
    
}
object2.y();

//6. this in HTML DOM - reference to html elements


