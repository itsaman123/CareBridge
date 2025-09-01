import express from 'express';
import { registerUser, loginUser, getProfile, updateProfile } from '../controllers/usersController.js'
const route = express.Router();
import authUser from '../middleware/authUser.js';

route.post('/register', registerUser);
route.post('/login', loginUser);
route.get('/profile', authUser, getProfile);
route.post('/updateProfile', authUser, updateProfile);

export default route
