import express from 'express';
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import './config/db.js';
import morgan from 'morgan';
import dotenv from 'dotenv'
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors)

const allowedOrigins = [
    "http://localhost:5173",
    "https://care-bridge-three.vercel.app"
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
};

app.use(cors(corsOptions));
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