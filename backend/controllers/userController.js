const User=require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config;



const signup = async (req, res) => {
    try {
      console.log("signup");
      const email = req.body.email;
      user = req.body;
      const data = await User.findOne({ username: req.body.username, email: email });
      console.log("data");
      console.log(data);
      console.log(user);
      if (data) {
        //  res.json({
        //   statusCode: 1,
        //   message: "Invalid Email,this email already exists",
        // });
        return res.status(400).send("invalid email").end();
      } else {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        console.log(user);
        const data = {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
          phone: user.phone,
          password: user.password,
          Admin: false,
        };
        await User.create(data);
        //  res.json({
        //   statusCode: 0,
        //   message: "Your account successfully created",
        //   data:data
        // });
        return res.status(200).send("Signed up").end();
      }
    } catch (exception) {
      console.log(exception);
      return res.json({
        statusCode: 1,
        error: "Server Error",
      });
    }
  }; 
const signin = async(req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    try {
      const data = await User.findOne({ email: email });
      console.log("found");
      console.log(data);
      if (data) {
        const validPassword = await bcrypt.compare(password, data.password);
        if (validPassword) {
          const token = await jwt.sign(
            {
              id: data._id,
              email: data.email,
              password: data.password,
            },
            process.env.SECRET,
            {
              expiresIn: "5h",
            }
          );
          res.set("auth", token);
         res.json({
            statusCode: 0,
            message: "Success",
            data: data,
            token,
          });
          return res.status(200).send("Logged in");
        } else {
          return res.status(401).send("Incorrect password");
        }
      } else {
        return res.status(401).send("Invalid E-mail");
      }
    } catch (exception) {
      return res.status(500).send("Server error");
    }
  };

const addProduct = async(req,res) =>{
    
}

const getAllUsers = async(req,res) =>{
    const data = await User.find({});
    console.log(req.body);
    return res.json({
      users: data
    });
}

module.exports={signin,signup,addProduct,getAllUsers}