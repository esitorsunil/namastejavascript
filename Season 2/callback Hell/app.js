// ISSUES OF CALLBACK HELL
// Callback Hell
// inversion of control

const cart = [shoes, pants, socks];

api.createCart(cart, function() {
    api.proceedPayment();
})