const express = require("express");
const Donor = require("../Model/DonorModel");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      name,
      phone,
      foodType,
      quantity,
      pickupLocation
    } = req.body;

    if (!name || !phone || !foodType || !quantity || !pickupLocation) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    const donor = new Donor({
      name,
      phone,
      foodType,
      quantity,
      pickupLocation
    });

    await donor.save();

    res.status(201).json({
      message: "Donation Successful!",
      data: donor
    });

  } catch (error) {
    console.log("Error while saving donor:", error);

    res.status(500).json({
      message: "Donation failed",
      error: error.message
    });
  }
});

module.exports = router;

router.get("/all", async (req, res) => {
  try {
    const donors = await Donor.find().sort({ createdAt: -1 });

    res.status(200).json({
      message: "Donors fetched successfully",
      data: donors
    });

  } catch (error) {
    console.log("Error while fetching donors:", error);

    res.status(500).json({
      message: "Failed to fetch donors",
      error: error.message
    });
  }
});
