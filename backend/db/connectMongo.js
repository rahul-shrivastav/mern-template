const mongoose = require('mongoose');

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("connected to DB");

    } catch (error) {
        console.log("connection to DB failed", error);
    }
}
module.exports = { connectToMongoDb };