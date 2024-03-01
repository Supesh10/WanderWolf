const validateRequest = (schema) =>{
    return (req, res, next) =>{
        try{
            let data = req.body;
            let validated = schema.parse(data);         
            //success
            next();
        } catch(exception){
            next(exception)
        }
    }
}

module.exports = validateRequest