import express from 'express'
import { router1 } from './routers/routers_1_forHomework.js'
import { router2 } from './routers/routers_2_forHomework.js'
import { ErrorHandler } from './middleware/ErrorHandler.js'
import { validation } from './middleware/validationMiddleware.js'


const app = express()
app.use(express.json())

app.use((req, res, next) => {
    console.log('application layer middleware')
    next()
})


// app.post('/users', validation, (req, res) => {
//     res.json({status: 'OK', data: req.body})
// })

app.use(router1, router2)


app.get('/route', validation, (req, res, next) => {
    console.log('route layer middleware')
    next()
}, (req, res) => {
    res.json({
        id: 0,
        data: 'homework route middleware type get'
    })
})

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });
  
app.use(ErrorHandler)


const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})