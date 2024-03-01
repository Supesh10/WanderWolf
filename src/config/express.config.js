const express = require("express");
const app = express();
const routes = require("../routes")
const {ZodError} = require("zod")

app.use(express.json()) //json content data parsers
app.use(express.urlencoded({
    extended: false
}))

app.use('/api/v1/',routes)

//404
app.use((req, res, next) =>{
    next({code: 404, message: "Not Found"})
})

//global error handler
app.use((error, req, res, next) =>{
    //error
    let code = error.code ?? 500;
    let msg = error.message ?? "Internal Server Error"

    if(error instanceof ZodError){
        let errorMsg = {};
        error.errors.map((errorObj) =>{
            errorMsg[errorObj.path[0]] = errorObj.message
        })
        code = 400;
        msg = errorMsg;
    }
    res.status(code).json({
        result: null,
        msg: msg,
        meta: null
    })
})

module.exports = app;