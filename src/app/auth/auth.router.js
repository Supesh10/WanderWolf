// const express = require("express")
// const router = express.Router()
const router = require("express").Router();
const validateRequest = require("../../middlewares/validator.middleware");
const authCtrl = require("./auth.controller");
const { registerSchema,userActivationSchema,loginSchema } = require("./auth.validator");
const uploader = require("./../../middlewares/uploader.middleware");

//  http://localhost:3000/auth/register?key=value
router.post("/register",uploader.single('image'), validateRequest(registerSchema),authCtrl.registerUser) 

router.post("/activate/:token",validateRequest(userActivationSchema), authCtrl.activateUser) 

router.post("/login", validateRequest(loginSchema),authCtrl.loginUser) 

router.get("/me", authCtrl.userDetail)

router.post("/forget-password",authCtrl.forgetPassword)

router.post("/set-password/:token", authCtrl.setPassword)

module.exports = router;