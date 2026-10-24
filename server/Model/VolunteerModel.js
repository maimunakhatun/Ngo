
const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    city: {
      type: String,
      default: "Durgapur"
    },
    availability: {
      type: String,
      enum: ["Weekends", "Weekdays", "Flexible"],
      default: "Weekends"
    },
    motivation: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Volunteer", volunteerSchema);
