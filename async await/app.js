//1.async   -   Always return a promise




const pr = new Promise((resolve, reject) => {
    resolve("This is promise")
})

async function getData(){
    return pr
}

const data = getData();
data.then((res) => console.log(res));


//2.async await

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise 1")
    }, 5000)

})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is promise 1")
    }, 10000)

})


// In Promise.then it will not wait 
async function handleData() {
    console.log("First one")

    //JS engines wait for await to resolve the promise, then it will exexute line console.log("Sunil")
    const val = await p;
    console.log("Sunil")
    console.log(val)

    const val2 = await p2;
    console.log("Sunil 1")
    console.log(val2)
}
handleData();


//Real world examples

const API_URL = "https://api.github.com/users/esitorsunil";

async function handleFetch() {
    try {
        const dataFetch = await fetch(API_URL);
        const json = await dataFetch.json();
        console.log(json)
    } catch (error) {
        console.log(error)
    }
}
handleFetch();

