import { Router } from 'express';
import { ProductModel } from '../MongoDBModels/products.js'


const productRouter = new Router()




productRouter.post('/product', async (req, res) => {

    try {
        const productData = {
            name: 'new product10',
            amount: 'ten',
            price: 200
        }

        const post = await ProductModel.create(productData)

        res.status(201).json({
            post
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }

})

productRouter.get('/product:id', async (req, res) => {

    try {

        const id = req.params.id;

        const post = await ProductModel.findById(id);

        res.status(201).json({
            post
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }

})

export { productRouter }