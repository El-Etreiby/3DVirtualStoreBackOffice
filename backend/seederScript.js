require('dotenv').config();

const productsData = require('./data/products.js');
const connectDB = require('./config/db.js');
const ProductModel  =require('./models/Product.js');

connectDB();

const importData = async () =>{
    try {
        await ProductModel.deleteMany();
        await ProductModel.insertMany(productsData);

        console.log("products' data loaded successfully"); 
        process.exit();
        
    } catch (error) {
        console.log(error);
        console.error("error with data import");
        process.exit(1);
        
    }
};

importData();