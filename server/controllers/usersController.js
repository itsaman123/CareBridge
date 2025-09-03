import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import doctorModel from "../models/doctor.js";
import appointmentModel from "../models/appointmentModel.js";
import { v2 as cloudinary } from 'cloudinary';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Please fill all the required details" });
        }

        const isUserExist = await userModel.findOne({ email });
        if (isUserExist) {
            return res
                .status(400)
                .json({ success: false, message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d", // optional
        });

        res.status(201).json({ success: true, token });
    } catch (e) {
        console.error(e);
        res
            .status(500)
            .json({ success: false, message: "Server error", error: e.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.json({ success: false, message: 'Please fill all the fields' });
        };
        const isUser = await userModel.findOne({ email });
        if (!isUser) {
            return res.send({ success: false, message: 'user does not exist' });
        }
        const isMatch = await bcrypt.compare(password, isUser.password);

        if (isMatch) {
            const token = jwt.sign({ id: isUser._id }, process.env.JWT_SECRET);
            res.json({ success: true, token });
        }

        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }
    }
    catch (err) {
        console.log(err);
        res.send({ success: false, message: err.message });
    }
}

export const getProfile = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) {
            return res.json({ success: false, message: 'userId is missing' })
        }
        const user = await userModel.findById(userId).select('-password')
        res.json({ success: true, user })

    }
    catch (err) {
        console.log(err);
        res.send({ success: false, message: err.message });
    }
}

export const updateProfile = async (req, res) => {
    try {
        const { userId, name, phone, address, gender, dob } = req.body;
        if (!name || !phone || !gender) {
            return res.json({ success: false, message: 'Please fill the required details' })
        }
        const imageFile = req.file;
        await userModel.findByIdAndUpdate(userId, { name, phone, address: JSON.parse(address), gender, dob });
        if (imageFile) {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' })
            const imageUrl = imageUpload.secure_url;
            await userModel.findByIdAndUpdate(userId, { image: imageUrl });
        }
        res.json({ success: true, message: "Profile Updated" });


    }
    catch (err) {
        console.log(err);
        res.send({ success: false, message: err.message });
    }
}

export const bookAppointment = async (req, res) => {
    try {
        const { userId, docId, slotDate, slotTime } = req.body;
        const docData = await doctorModel.findById(docId).select("-password");

        if (!docData.available) {
            return res.json({ success: false, message: 'Doctor Not Available' });
        }
        let slots_booked = docData.slots_booked;

        if (slots_booked[slotDate]) {
            if (slots_booked[slotDate].includes(slotTime)) {
                return res.send({ success: false, message: 'Slot not available' })
            }
            else {
                slots_booked[slotDate].push(slotTime)
            }
        }
        else {
            slots_booked[slotDate] = [];
            slots_booked[slotDate].push(slotTime);
        }
        const userData = await userModel.findById(userId).select("-password");
        delete docData.slots_booked;
        const appointmentData = {
            userId,
            docId,
            userData,
            docData,
            amount: docData.fees,
            slotTime,
            slotDate,
            date: Date.now()
        };
        const newAppointment = new appointmentModel(appointmentData);
        await newAppointment.save();

        await doctorModel.findByIdAndUpdate(docId, { slots_booked })

        res.json({ success: true, message: 'Appointment booked successfully' });

    }
    catch (err) {
        console.log(err);
        res.send({ success: false, message: err.message });
    }
}