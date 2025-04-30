

document.querySelector("#grandparent")
.addEventListener('click', () => {
    console.log("grandparent element")
}, true)//capturing

document.querySelector("#parent")
.addEventListener('click', (e) => {
    console.log("parent element")
    //e.stopPropagation();
}, false)// bubbling

document.querySelector("#child")
.addEventListener('click', () => {
    console.log("child element")
}, false) //bubbling