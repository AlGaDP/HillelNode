import { Router } from "express"

const router2 = new Router;

router2.use((req, res, next) => {
    console.log('router 2 layer middleware')
    next()
})

router2.get('/homeworkrouter2', (req, res) => {
    res.json({
        id: 1,
        data: 'homework router 2 type get'
    })
})

router2.post('/homeworkrouter2', (req, res) => {
    res.json({
        id: 2,
        data: 'homework router 2 type post'
    })
})

router2.put('/homeworkrouter2', (req, res) => {
    res.json({
        id: 3,
        data: 'homework router 2 type put'
    })
})

export { router2 }