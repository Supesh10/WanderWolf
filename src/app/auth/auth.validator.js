const {z} = require("zod");

let registerSchema = z.object({
    name: z.string().max(30).min(2).nonempty(),
    email: z.string().email().nonempty(),
    address: z.string(),
    role: z.string().regex(/admin|cusutomer|seller/).nonempty(),
    phone: z.string().regex(/^\+?[1-9][0-9]{7,12}$/)

})

module.exports = {
    registerSchema
}