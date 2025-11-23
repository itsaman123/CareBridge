import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    throw new Error('❌ MONGODB_URI is not defined in environment variables');
}

// Optional: only needed if you really want to disable buffering
mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 0);

export async function connectDB() {
    if (mongoose.connection.readyState === 1) {
        return;
    }

    if (mongoose.connection.readyState === 2) {
        return;
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ MongoDB Connection Error:', err);
        throw err;
    }
}
