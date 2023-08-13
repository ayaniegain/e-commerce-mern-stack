const mongoose = require("mongoose");
const colors = require("colors");

let connectDB = async () => {
  try {
    let conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`database connected ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error occured ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
