//Higher Order Func - The function take another func as argument or return a func as a value

const radius = [2,1,3,4];

const area = function(radius) {
    return Math.PI * radius * radius
}

const circumference = function(radius) {
    return 2 * Math.PI * radius
}

const diameter = function(radius) {
    return 2 * radius
}


//Array.prototype. takes all the array methods and adds a new method
Array.prototype.calculate = function (logic) {
   const output = [];
   for (let i = 0; i < this.length; i++) {
      output.push(logic(this[i]));
   }
   return output;
}

//this = radius
console.log(radius.calculate(area))
//console.log(radius.map(area))
console.log(calculate(radius, circumference))
console.log(calculate(radius, diameter))

