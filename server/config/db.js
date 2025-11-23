import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI


mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 0);

mongoose.connect(MONGODB_URI)
    .then(() => console.log('mongoDB connected'))
    .catch((err) => console.log('MongoDB Connection Error ', err))