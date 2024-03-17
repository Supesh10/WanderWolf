const dotenv = require("dotenv")
dotenv.config()
const nodemailer = require("nodemailer")

class MailService{
    transporter;
    constructor(){
        try{
            this.transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: false, // upgrade later with STARTTLS
                auth: {
                  user: process.env.SMTP_USER,
                  pass: process.env.SMTP_PWD,
                },
            })
        } catch(exception){
            console.log(exception);
            //throw new Error("Error  creating the mail server connection");
            throw {code:500, msg:"Error creating the mail server connection"};
        }
    }

    sendEmail =  async (to, sub, msg) => {
        try{
            let response = await this.transporter.sendmail({
                to: to,
                from: process.env.SMTP_FROM_ADDR,
                sub : sub,
                html : msg,
                text : msg
            })
            if(response){
                return true
            }
        } catch(exception){
            console.log(exception);
            throw {code: 500, msg:"Error Sending Email"}
        }
    }
}

const mailSvc = new MailService()
module.exports = mailSvc;