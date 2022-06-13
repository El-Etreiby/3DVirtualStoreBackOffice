const express = require("express");
const router = express.Router();
const {getAllProducts, getProductById} = require('../controllers/productsControllers.js');

//@desc GET all products from db
//@route Get /api/products
//@acess Public
router.get('/', getAllProducts);


//@desc GET a product from db by id
//@route Get /api/products
//@acess Public
router.get('/:id', getProductById);
module.exports = router;