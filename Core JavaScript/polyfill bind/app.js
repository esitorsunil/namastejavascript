//bind

let name1 = {
    firstName: "Esitor",
    lastName: "Sunil",
}

let printFullName = function(district, state, country) {
    console.log(this.firstName+ ' '+ this.lastName+ " from "+ district + ", "+ state+ ", "+ country);
}
//bind - gives you a copy (function) invoke it later
let fullName = printFullName.bind(name1, "Chennai", "Tamil Nadu");
fullName("India");



Function.prototype.mybind = function(...args){
    let obj = this;
    params = args.slice(1);
    return function(...args2){
        obj.apply(args[0], [...params, ...args2]);
    }
}

let fullName2 = printFullName.mybind(name1, "Chennai", "Tamil Nadu");
fullName("India");