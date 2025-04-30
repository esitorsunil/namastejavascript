
document.querySelector("#category")
.addEventListener('click',(e) => {
  console.log(e.target.id)
  window.location.href = ("/" + e.target.id);
})


document.querySelector("#category1")
.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})