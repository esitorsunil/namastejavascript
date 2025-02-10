//What is callback function
//callback function is a function passed as an argument to another function . due to callback we use async 

setTimeout(function(){
    console.log("Namaste JS")
},5000);

function x(){

}
x(function y(){

}) //function y calledd later in code is called callback

//event listener
//closure count the button

function attachEvent(){
let count = 0;
  document.getElementById("clickme")
  .addEventListener("click",function xyz(){
    console.log("clicked", count);
})
}
attachEvent();

//interview Q - Garbage collection and removeEventListener