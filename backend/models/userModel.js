const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Admin: {
    type: Boolean,
    required: true,
  },
  // cart:{
  //   type:ObjectId,
  //   ref:"Cart",
  //   required:true,
  // }
});

mongoose.models = {};
userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });
const User = mongoose.model("User", userSchema);
module.exports = User;