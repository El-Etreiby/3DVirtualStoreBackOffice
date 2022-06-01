const User=require("../models/userModel");
const Product=require("../models/Product")

const addProduct = async(req,res) =>{
    const user= req.payload.id;
    const valid = User.findOne({_id:user});
    if(valid.Admin ===true){
        const product= Product.create({
            Name:req.body.Name,
            Category:req.body.Category,
            Price:req.body.Price,
            CountInStock:req.body.CountInStock,
            Availability:req.body.Availability,
            SubCategory:req.body.SubCategory,
            Brand: req.body.Brand,
            ImageUrl: req.body.ImageUrl,

        })
        return res.json({
            statusCode:0,
            message:"New Product added successfully",
        })
    }
    else{
        return res.json({
            statusCode:1,
            error:"Only Admins can add products"
        })
    }
    
}



module.exports={addProduct}
