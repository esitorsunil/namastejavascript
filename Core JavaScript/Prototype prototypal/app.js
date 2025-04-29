let object = {
    firstName: "Sunil",
    city: "Chennai",
    getIntro: function(){
        console.log(this.firstName+" from "+this.city);
    }
}

let object2 = {
    firstName: "Dhoni"
}

object2.__proto__= object;


