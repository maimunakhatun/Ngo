const mongoose = require("mongoose");

const Connection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Error while connecting DB:", error.message);
    }
};

module.exports = Connection;