import express from 'express'
import jwt from "jsonwebtoken"
import 'dotenv/config'
import { ErrorHandler } from './middleware/ErrorHandler.js'

const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
const app = express();
app.use(express.json());


app.post('/api/auth/refresh-token', (req, res) => {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        return res.status(400).json({ error: 'The refresh token is missing.' });
    }

    try {
        const decoded = jwt.verify(refreshToken, tokenSecretKey);
        
        const accessToken = jwt.sign({ 'sub': decoded.sub, 
                                       'name': decoded.name }, tokenSecretKey, { expiresIn: '15m' });

         res.status(200).json({ accessToken });
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({ error: 'Expired or invalid refresh token.' });
        } else {
            return res.status(400).json({ error: 'Error in the input data or invalid refresh token' });
        }
    }
});


app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

app.use(ErrorHandler)

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});