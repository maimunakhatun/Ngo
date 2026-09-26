const express = require("express");
const User = require("../Model/userModel");

const router = express.Router();

router.post("/add", async (req, res) => {
    try {
        const { name, email, phone, role, address } = req.body;

        if (!name || !email || !phone || !role || !address) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const user = new User({
            name,
            email,
            phone,
            role,
            address
        });

        await user.save();

        res.status(201).json({
            message: "Data Inserted Successfully",
            data: user
        });

    } catch (error) {
        console.log("Error While Inserting Data:", error);

        res.status(500).json({
            message: "Data Not Inserted",
            error: error.message
        });
    }
});

module.exports = router;