import express from 'express'
import passport from 'passport'
import { ExtractJwt } from 'passport-jwt'
import { Strategy } from 'passport-jwt'
import 'dotenv/config'
import { ErrorHandler } from './middleware/ErrorHandler.js'
import { usersDB } from './DB/simulationDB.js'
import mongoose from 'mongoose'
import { mongoURI } from './config/mongodb-config.js'
import { productRouter } from './Routes/productRouter.js'

const users = usersDB()
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
const app = express();

app.use(express.json());
app.use(passport.initialize());
app.use(productRouter);

mongoose.connect(mongoURI)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Failed to connect to mongo'))

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: tokenSecretKey
};
const JwtStrategy = Strategy;
passport.use(new JwtStrategy(jwtOptions, (payload, done) => {
    const { userId } = payload

    try {
        const user = users.find(user => user.id === userId)
        if (user) {
            done(null, user)
        } else {
            done(null, false)
        }
    } catch (e) {
        console.log(e)
    }
}));


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use(ErrorHandler)

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});