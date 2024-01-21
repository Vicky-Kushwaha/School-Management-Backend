const adminregistration = require("../models/register-model");
const teacherRegistration = require("../models/teacher-model");
const studentRegistration = require("../models/student-model");
const bcrypt = require("bcryptjs");


const login = async(req, res) => {
    try {
        const { email, category, password } = req.body;

        if (category === "student") {
            const studentExist = await studentRegistration.findOne({ email });
            const user = await bcrypt.compare(password,studentExist.password);

            if (user) {
                res.status(200).json({
                    message: "Login successful",
                    token: await studentExist.generateToken(),
                    userId: studentExist._id.toString(),
                });
            } else{
                res.status(401).json({ message: "Invalid email or password" });
            }

        } else if (category === "admin") {
            const adminExist = await adminregistration.findOne({ email });
            const user = await bcrypt.compare(password,adminExist.password);

            if (user) {
                res.status(200).json({
                    message: "Login successful",
                    token: await adminExist.generateToken(),
                    userId: adminExist._id.toString(),
                });
            } else{
                res.status(401).json({ message: "Invalid email or password" });
            }

        } else if (category === "teacher") {
            const teacherExist = await teacherRegistration.findOne({ email });
            const user = await bcrypt.compare(password,teacherExist.password);

            if (user) {
                res.status(200).json({
                    message: "Login successful",
                    token: await teacherExist.generateToken(),
                    userId: teacherExist._id.toString(),
                });
            } else{
                res.status(401).json({ message: "Invalid email or password" });
            }

        } else {
            // If category is not one of the specified types
            res.status(400).json({ message: "Invalid credentials" });
        }

    } catch (error) {
        res.status(500).json({message: "Invalid credentials"});
    }
};

module.exports = login;