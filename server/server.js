import express from 'express';
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import './config/db.js';
import morgan from 'morgan';
import dotenv from 'dotenv'
const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.json({
        health: 'ok',
        backend: 'running'
    })
})

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})