require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect(
            process.env.MONGO_URL,
            {
                useNewUrlParser : true,
                useUnifiedTopology: true

            }
        );

        console.log("connection to MONGODB SUCCEEDED :D ");
    } catch (error) {
        console.log("connection to MONGODB Failed :( ");
        process.exit(1);
        
    }
};

module.exports = connectDB ;