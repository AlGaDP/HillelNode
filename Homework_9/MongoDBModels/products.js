import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    amount: String,
    price: Number,
    date: { type: Date, default: Date.now },
});

const ProductModel = mongoose.model('Product', ProductSchema);


export { ProductModel }