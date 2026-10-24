
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

// Database connection
const Connection = require("./database/db");

// Routes
const userRoute = require("./Routes/route");
const donorRoute = require("./Routes/donorRoute");
const memberRoute = require("./Routes/memberRoute");
const volunteerRoute = require("./Routes/volunteerRoute");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect MongoDB
Connection();

// API routes
app.use("/api/user", userRoute);
app.use("/api/donor", donorRoute);
app.use("/api/member", memberRoute);
app.use("/volunteer", volunteerRoute);

// Test route
app.get("/", (req, res) => {
  res.send("NGO Waste Food Backend Server is Running!");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server Running On Port Number ${PORT}`);
});
