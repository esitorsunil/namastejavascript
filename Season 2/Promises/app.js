// Promise is a object eventually completion of an asynchronous operation
// fetch return a promise


const cart = ["pant", "shirt", "t-shirt"];

const promise = createCart(cart)

promise.then(function (orderId){
    proceedToPayment(orderId)
})

//Promise Chaining

createOrder(cart)
.then((orderId) => proceedToPayment(orderId))
.then((paymentInfo) => receivePayment(paymentInfo))
.then((paymentCard) => OrderPlaced(paymentCard));