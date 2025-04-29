//call, apply, bind

let name1 = {
    firstName: "Esitor",
    lastName: "Sunil",
}

let printFullName = function(district, state) {
    console.log(this.firstName+ " "+ this.lastName + " from "+ district+ ", "+ state);
}

//function borrowing
printFullName.call(name1, "Chennai", "Tamil Nadu");

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}


//apply - we can pass in array methods
printFullName.apply(name2, ["Mumbai", "Maharastra"]);



//bind - gives you a copy (function) invoke it later
let fullName = printFullName.bind(name1, "Chennai", "Tamil Nadu");
console.log(printFullName);
fullName();