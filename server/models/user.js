import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String },
    phone: { type: String, defult: '0000000000' },
    address: { type: Object, defautl: { line1: '', line2: '' } },
    dob: { type: String, default: 'Not selected' },
    gender: { type: String },
})

const userModel = mongoose.model('user', userSchema);
export default userModel;
