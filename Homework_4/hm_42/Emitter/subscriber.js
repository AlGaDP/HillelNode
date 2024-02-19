import { eventEmitter } from "./emiter.js";

    eventEmitter.emit('buy', {ProductList: ["product1", "product2"]})
    eventEmitter.emit('addToCart', {addToCart: true})
    eventEmitter.emit('deleteFromCart', {deleted: true})
    eventEmitter.emit('checkOrder', {saled: false})