import { Router } from "express"

const router1 = new Router;

router1.use((req, res, next) => {
    console.log('router 1 layer middleware')
    next()
})

router1.get('/homeworkrouter1', (req, res) => {
    res.json({
        id: 1,
        data: 'homework router 1 type get'
    })
})

router1.post('/homeworkrouter1', (req, res) => {
    res.json({
        id: 2,
        data: 'homework router 1 type post'
    })
})

router1.put('/homeworkrouter1', (req, res) => {
    res.json({
        id: 3,
        data: 'homework router 1 type put'
    })
})


export { router1}