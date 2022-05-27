require("dotenv").config();
const express = require('express');
const app = express();
const connectDB = require('./config/db.js');
const jwt = require("jsonwebtoken");
const productsRouter = require('./routes/productsRoutes');
const userRouter = require('./routes/userRoutes');
const cors=require("cors");

connectDB();


app.use(
  cors({
    exposedHeaders: "auth",
  })
);

app.use(express.json());

app.use("/api/products", productsRouter);
app.use("/api/user", userRouter);


const PORT = process.env.PORT || 2000 ;

app.listen(PORT, ()=> console.log(`server running on port: ${PORT}`));


