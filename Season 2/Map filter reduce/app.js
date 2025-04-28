//map filter reduce

const arr = [5,4,6,2,1,3]

// *2 to all values
const output1 = arr.map((x) =>  x* 2);
console.log(output1);

// give odd values from an array
const filter = arr.filter((x) => x% 2);
console.log(filter)

// add all values - reduce
const reduce = arr.reduce(function(acc,curr){
    acc = acc + curr
    return acc;
},0)

console.log(reduce)


//reduce (biggest value)
const output = arr.reduce(function(max, curr) {
    if(curr > max) {
        max = curr;
    }
    return max;
}, 0);

console.log(output);

const obj =  [
    { firstName: "Esitor", lastName:"Sunil", age:21 },
    { firstName: "Mohd", lastName:"Azar", age:19 },
    { firstName: "Ashwin", lastName:"Prana", age:21 },
    { firstName: "Vijay", lastName:"Joseph", age:44 },
    { firstName: "Sanjay", lastName:"Dutt", age:14}
]

const map = obj.map((x) => x.firstName +" "+x.lastName);
console.log(map);

// 21 - 2, 19 - 1, 44 - 1, 14 - 1
const reducetricky = obj.reduce(function (acc, curr) {
  if(acc[curr.age]){
     acc[curr.age] = ++acc[curr.age]
  }
  else {
    acc[curr.age] = 1;
  }
  return acc;
  
}, {})
console.log(reducetricky)

//>20 - firstName
const mapfilter = obj.filter((x) => x.age > 20 ).map((x) => x.firstName)
console.log(mapfilter);

//same with reduce
const reduce1 = obj.reduce(function(acc,curr) {
    if(curr.age > 20) {
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(reduce1)