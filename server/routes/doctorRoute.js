import express from 'express';
import { loginDoctor, doctorProfile, updateDoctorProfile } from '../controllers/doctorsController.js';
const doctorRouter = express.Router();

doctorRouter.post('/login', loginDoctor)
doctorRouter.get('/profile', doctorProfile)
doctorRouter.post('/update-profile', updateDoctorProfile)

export default doctorRouter