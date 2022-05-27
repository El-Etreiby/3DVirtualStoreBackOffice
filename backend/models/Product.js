const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Category:{
        type: String,
        required: true
    },
    Price:{
        type: Number,
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    Availability:{
        type: String,
        required: true
    },
    Subcategory: {
        type: String,
        required: true
    },
    Brand: {
        type: String,
        required: true
    }
    
    
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;