import express from 'express';
import { registerUser } from '../controllers/usersController.js'
const route = express.Router();

route.post('/register', registerUser);

export default route
