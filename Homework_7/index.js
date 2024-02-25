import express from 'express'
import { userRouter } from './routes/userRouter.js'
import { ErrorHandler } from './middleware/ErrorHandler.js'

const app = express()
app.use(express.json())
app.use( userRouter)
app.use(ErrorHandler)


app.listen(3000, () => {
    console.log('Server listening on port 3000')
})