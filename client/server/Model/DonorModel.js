const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    phone: {
      type: String,
      required: true
    },

    foodType: {
      type: String,
      required: true
    },

    quantity: {
      type: String,
      required: true
    },

    pickupLocation: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Donor = mongoose.model("Donor", donorSchema);

module.exports = Donor;

