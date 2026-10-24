
const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema(
  {
    fullName: {
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
    phone: {
      type: String,
      required: true
    },
    city: {
      type: String,
      default: "Durgapur"
    },
    membershipType: {
      type: String,
      enum: ["Monthly", "Yearly"],
      default: "Monthly"
    }
  },
  {
    timestamps: true
  }
);

const Member = mongoose.model("Member", memberSchema);

module.exports = Member;
