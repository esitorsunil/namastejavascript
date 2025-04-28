//promise.all - It will not wait for other promises

//promise.allsettled - It can handle above cases

//promise.race - who finish first, winner (first settled promise), if first promise error, it will thrown an error

//promise.any - it will wait for first success of api, if three api fails, it will show the array of aggregrated error

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P1 success")
    },3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
       // resolve("P2 success")
       reject("P2 fail")
    },1000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("P3 success")
    },2000);
})

//Promise.all
//Promise.allSettled
//Promise.race
Promise.any
([p1,p2,p3]).then((res) => console.log(res))
.catch((err) => console.error(err))