const User=require("../models/userModel")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config;

const signup = async (req, res) => {
    try {
      const email = req.body.email;
      user = req.body;
      const data = await User.findOne({ Email: email });
      if (data) {
        return res.json({
          statusCode: 1,
          message: "Invalid Email,this email already exists",
        });
      } else {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        console.log(user);
        await User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          email: user.email,
          phone: user.phone,
          password: user.password,
          Admin: false,
        });
        return res.json({
          statusCode: 0,
          message: "Your account successfully created",
        });
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
    const email = req.body.Email;
    const password = req.body.Password;
  
    try {
      const data = await User.findOne({ email: email });
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
          return res.json({
            statusCode: 0,
            message: "Success",
            data: data.Admin,
            token,
          });
        } else {
          return res.json({
            statusCode: 1,
            message: "Invalid Password",
          });
        }
      } else {
        return res.json({
          statusCode: 1,
          message: "Invalid Email",
        });
      }
    } catch (exception) {
      console.log(exception);
      return res.json({
        statusCode: 1,
        error: "exception",
      });
    }
  };



module.exports={signin,signup}