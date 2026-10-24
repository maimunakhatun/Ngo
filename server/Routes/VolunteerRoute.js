const express = require("express");
const Volunteer = require("../Model/VolunteerModel");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const volunteer = new Volunteer(req.body);
    await volunteer.save();

    res.status(201).json({
      message: "Volunteer registered successfully!"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: error.message
    });
  }
});

module.exports = router;