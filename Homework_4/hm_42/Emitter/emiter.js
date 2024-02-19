import EventEmitter from 'events'

const eventEmitter  = new EventEmitter()

eventEmitter .on('buy', (data) => {
    console.log('Product bought:', data);
});

eventEmitter .on('addToCart', (data) => {
    console.log('Product added to cart:', data);
});

eventEmitter .on('deleteFromCart', (data) => {
    console.log('Product deleted from cart:', data);
});

eventEmitter .on('checkOrder', (data) => {
    console.log('Order placed:', data);
});


export { eventEmitter }