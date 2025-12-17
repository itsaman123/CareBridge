import express from 'express';
import {
    registerUser, loginUser, getProfile, updateProfile, bookAppointment,
    listAppointment, getAllUsers
} from '../controllers/usersController.js'
const route = express.Router();
import authUser from '../middleware/authUser.js';

route.post('/register', registerUser);
route.post('/login', loginUser);

route.get('/get-profile', authUser, getProfile);
route.get('/get-all-users', getAllUsers);
route.post('/update-profile', authUser, updateProfile);
route.post('/book-appointment', authUser, bookAppointment);

route.get('/appointments', listAppointment)


export default route
