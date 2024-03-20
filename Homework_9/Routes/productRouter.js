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

productRouter.put('/product/:id', async (req, res) => {
    const id = req.params.id;

    try {
            const updatedProductData = {
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price
        };

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updatedProductData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Продукт не знайдено' });
        }

        res.status(200).json({ updatedProduct });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

productRouter.patch('/product/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const updatedProductData = {
            name: req.body.name,
            amount: req.body.amount,
            price: req.body.price
        };

        const updatedProduct = await ProductModel.findByIdAndUpdate(id, updatedProductData, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Продукт не знайдено' });
        }

        res.status(200).json({ updatedProduct });
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
});

productRouter.get('/product/:id', async (req, res) => {

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