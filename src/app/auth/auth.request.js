const { generateRandomString } = require("../../helpers/helpers");

class AuthRequest{
    #data = {};
    constructor(req){
        this.#data.body = req.body;
        this.#data.file = req.file;
    }

    transformRegisterData(){
        if(this.#data.file){
            this.#data.body.image = this.#data.file.filename
        }

        this.#data.token = generateRandomString();
        this.#data.status = "inactive";

        return this.#data;
    }
}

module.exports = AuthRequest;