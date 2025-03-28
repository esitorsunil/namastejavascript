const arr = [1,2,3,4,5]

const map = arr.map((x) => x*2)
console.log(map)

const filter = arr.filter((x) => x%2 === 0)
console.log(filter)

const reduce = arr.reduce((x,y) => x+y)
console.log(reduce)

const objects = [
    {firstName: "sunil", lastName: "singh", age: 20},
    {firstName: "sunil1", lastName: "singh1", age: 40},
    {firstName: "sunil2", lastName: "singh2", age: 20},
    {firstName: "sunil3", lastName: "singh3", age: 60},
]

//tricky map
const map2 = objects.map((x) => x.firstName + " " + x.lastName)
console.log(map2)

//tricky filter
const filter2 = objects.filter((x) => x.age > 30)
console.log(filter2)

//tricky map and reduce
const filterMap = objects.filter((x) => x.age > 30).map((x) => x.firstName)
console.log(filterMap)

//same in reduce (above example)
const reduce2 = objects.reduce(function (acc,curr) {
    if(curr.age > 30){
        acc.push(curr.firstName)
    }
    return acc;
}, [])
console.log(reduce2)