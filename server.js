const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB =require ('./config/db.js');
const authRoutes =require ('./routes/authRoute.js');


//config env
dotenv.config();
//connect db
connectDB()
//rest object
const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))

//rest api
app.use("/api/v1/auth",authRoutes);


let port = process.env.PORT
// app listen
app.listen(port, () => {
  console.log(`running on port number --> ${port}`.bgYellow);
});
