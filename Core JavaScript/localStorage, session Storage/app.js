//sesson storage - persistent till we in browser, when we close the data will be lost. very useful than cookies

//local storage - same as session, does not expire. stores on window.object

const user = {name: "Sunil"}

localStorage.setItem("user", JSON.stringify(user));

sessionStorage.setItem("user", JSON.stringify(user));


// getitem, removeitem, clear 