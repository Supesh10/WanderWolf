const {z} = require("zod");

let registerSchema = z.object({
    name: z.string().max(30).min(2).nonempty(),
    email: z.string().email().nonempty(),
    address: z.string(),
    role: z.string().regex(/admin|cusutomer|seller/).nonempty(),
    phone: z.string().regex(/^\+?[1-9][0-9]{7,12}$/)

})

let loginSchema = z.object({
    email: z.string().min(8).nonempty(),
    password: z.string().nonempty()
})

let userActivationSchema = z.object({
    password: z.string().min(8).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/),
    confirmPassword: z.string().nonempty()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"]
});

module.exports = {
    registerSchema,
    userActivationSchema,
    loginSchema
}