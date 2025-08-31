import userModel from "../models/user.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ success: false, message: "Please fill all the required details" });
        }

        const isUserExist = await userModel.findOne({ email });
        console.log(isUserExist);
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
