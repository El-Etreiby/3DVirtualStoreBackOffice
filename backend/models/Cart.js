const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cartSchema = new Schema({

    TotalPrice:{
        type:Number,
        required:true
    },
 
});

mongoose.models = {};
cartSchema.set("toJSON", { virtuals: true });
cartSchema.set("toObject", { virtuals: true });
const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;