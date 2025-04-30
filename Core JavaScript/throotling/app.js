//const normalFunc = () => {
//    console.count("Normal Function");
//  }

// window.addEventListener("resize",normalFunc);


const loggedFunc = () => {
    console.count("Throttling")
}


const throttle = (fn,limit) => {
    let flag = true;
    return function() {
        let context = this;
        let arg = arguments;
        if(flag) {
            fn.apply(context, arg)
            flag = false
             setTimeout(() => {
             flag = true
             }, limit)
        }
        
    }
}

const betterFunc = throttle(loggedFunc, 1000);

window.addEventListener('resize', betterFunc)
  



