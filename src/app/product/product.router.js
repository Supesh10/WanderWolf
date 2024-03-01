const router = require("express").Router()


router.get("/product", (req, res, next) =>{}) 

router.get("/product/list-home", (req, res, next) =>{})

router.get("/product/:id", (req, res, next) =>{}) 

router.get("/product/:slug/detail", (req, res, next) =>{})

router.post("/product",(req, res, next) =>{})

router.put("/product/:id", (req, res, next) =>{})

router.delete("/product/:id", (req, res, next) =>{})

module.exports = router;