const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

const Connection = require("./database/db");
const userRoute = require("./Routes/route");
const donorRoute = require("./Routes/donorRoute");

const app = express();

const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
Connection();

// Routes
app.use("/api/user", userRoute);
app.use("/api/donor", donorRoute);

// Test Route
app.get("/", (req, res) => {
  res.send("NGO Waste Food Backend Server is Running!");
});

// Server
app.listen(PORT, () => {
  console.log(`Server Running On Port Number ${PORT}`);
});