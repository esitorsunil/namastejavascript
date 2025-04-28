// Promise is a object eventually completion of an asynchronous operation
// fetch return a promise


const cart = ["pant", "shirt", "t-shirt"];

createOrderId(cart)
.then(function (orderId){
    console.log(orderId)
    return orderId
    //proceedToPayment(orderId)
})
.catch(function(err){
    console.log(err.message);
})
.then(function(orderId){
  return proceedToPayment(orderId)
  
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message);
})

//Promise Chaining
function createOrderId(cart) {
    const pr = new Promise(function(resolve, reject) {
      
        if(!validateCart(cart)){
            const err = new Error ("cart is not valid");
            reject(err);
        }
        const orderId = "12345";
        if(orderId){
            setTimeout(function() {
                resolve(orderId)
            },5000)
        }    
    });
    return pr;
}

function proceedToPayment(orderId){
    const pr = new Promise(function(resolve, reject){
        resolve("Payment Successfull")
    })
    return pr;
}
function validateCart(cart) {
    return false;
}