const router = require("express").Router();
const auth=require("../middelware/authentication");
const userValidation=require("../middelware/userValidation");
const userController=require("../controllers/userController")

router.route("/signup").post(userValidation.validateSignup,userController.signup);

router.route("/signin").post(userValidation.validateSignin,userController.signin);

router.route("/getusers").get(userController.getAllUsers);


module.exports = router;