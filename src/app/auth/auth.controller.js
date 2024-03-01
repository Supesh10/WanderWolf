const AuthRequest = require("./auth.request");

class AuthController{
    registerUser(req, res, next){
        //
        try{

            let mapped = (new AuthRequest(req)).transformRegisterData()

            // otp, token
                    //otp
            // content store in db


            console.log(mapped)
        } catch(exception) {
            next(exception);

        }
    }

    //  ?key=value
    activateUser(req, res, next){
        //
        let token = req.params.token;
        let query = req.query; //obj

    }

    loginUser(req, res, next){
        //
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