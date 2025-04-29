let counter= 0;

const getData = () => {
    //call an api and get data
    console.log("Fetching the data", counter++);
}

const debounce = function (fn,d){
    let timer;
    return function (){
        let context = this,
        args = arguments
        clearTimeout(timer)
        timer = setTimeout(() => {
            getData.apply(context, args)
        },d)
    }
}


const magicSearch = debounce(getData, 300);