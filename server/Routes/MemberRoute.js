
const express = require("express");
const Member = require("../Model/MemberModel");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      city,
      membershipType
    } = req.body;

    if (!fullName || !email || !phone) {
      return res.status(400).json({
        message: "Name, email and phone are required"
      });
    }

    const member = new Member({
      fullName,
      email,
      phone,
      city: city || "Durgapur",
      membershipType: membershipType || "Monthly"
    });

    await member.save();

    res.status(201).json({
      message: "Member registered successfully!",
      data: member
    });

  } catch (error) {
    console.log("Error while saving member:", error);

    res.status(500).json({
      message: "Member registration failed",
      error: error.message
    });
  }
});

module.exports = router;
