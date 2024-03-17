const dotenv = require("dotenv")
dotenv.config()
const AuthRequest = require("./auth.request");
const mailSvc = require("../../services/mail.service");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

class AuthController{
    async registerUser(req, res, next){
        //
        try{
            console.log("here")

            let mapped = new AuthRequest(req).transformRegisterData()

            // otp, token
                    //otp
            // content store in db

            // mailSvc.sendEmail(
            //     mapped.email,
            //     "Activate your account",
            //     `<b>Dear ${mapped.name},</b>
            //     <p>Your Account has been registered succesfully</p>
            //     <p>Please click on the following link to activate your account</p>
            //     <a href="${process.env.FRONTEND_URL}/activate/${mapped.token}">${process.env.FRONTEND_URL}/activate/${mapped.token}</a>
            //     <p>Thank you</p>
            //     <p>Regards</p>
            //     <p>No reply, system</p>
            //     `
            // )


            res.json({
                result: mapped,
                msg: "User Registered",
                meta: null
            })
        } catch(exception) {
            next(exception);

        }
    }

    //  ?key=value
    activateUser(req, res, next){
        let token = req.params.token;
        try{
            let token = req.params.token;

            //Database update

            let password = bcrypt.hashSync(req.body.password, 10);
            
            res.json({
                result:password
            })


        }catch(exception){
            next(exception);
        }

        res.json({
            token: token
        })
        //pachi

    }

    loginUser(req, res, next){
        try{
            let credentials = req.body;
            console.log(credentials);
            //{email:"", password:""}
            //Todo: DB user fetch based on the user email
            let userDetail = {
                id: 123,
                name: "Supesh Nakarmi",
                email: "supesh@gmail.com",
                address: "Lalitpur",
                role: "admin",
                phone: "9801234567",
                password: "$2a$10$/gXElaGFb9mQ.TpyX3VkD.v15pBeYMBe288/jTe9/27YE9YHlnH2O"
            }

            //Admin@123

            if(bcrypt.compareSync(credentials.password, userDetail.password)){
                // password

                let token = jwt.sign({
                    id:userDetail.id
                },process.env.JWT_SECRET,{
                    expiresIn:'1h'
                });

                let refreshtoken = jwt.sign({
                    id:userDetail.id
                },process.env.JWT_SECRET,{
                    expiresIn:'7h'
                });

                res.json({
                    result: {
                        token: token,
                        refreshtoken: refreshtoken,
                        type: "Bearer",
                        detail: {
                            id: userDetail.id,
                            name: userDetail.name,
                            email: userDetail.email,
                            role: userDetail.role
                        }
                    },
                    message : "Logged In Successfully",
                    meta : null
                })
            }else{
                next({
                    code: 400,
                    message: "Credentials does not match"
                })
            }

        }catch(exception){

        }
    }

    userDetail(req, res, next){
        //
    }

    forgetPassword(req, res, next){
        //
    }
    
    setPassword(req, res, next){
        //
    }
}

const authCtrl = new AuthController()

module.exports = authCtrl;