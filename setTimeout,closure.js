function x(){
    var a = 10;
    setTimeout(function (){
        console.log(a) // after 3 seconds
    },3000);
    console.log("Namaste JS") //first
}

x()


//problem every 1 sec - 1,2,3,4,5

function y(){
    for(let i=1;i<=5;i++){   //separate (block scope) new copy of i in let scope // if we use var then 6,6,6,6,6 
        setTimeout(function (){
            console.log(i);
        },i*1000);
    }
    console.log("Namaste JS");
}
y()

//using var
function z() {
  for (var i = 1; i <= 5; i++) {
  function close(i) {
    setTimeout(function (){
        console.log(i);
    },i*1000);
  }
  close(i);
  }
}
z()