const router = require("express").Router()


router.get("/category", (req, res, next) =>{}) 

router.get("/category/list-home", (req, res, next) =>{})

router.get("/category/:id", (req, res, next) =>{}) 

router.get("/category/:slug/detail", (req, res, next) =>{})

router.post("/category",(req, res, next) =>{})

router.put("/category/:id", (req, res, next) =>{})

router.delete("/category/:id", (req, res, next) =>{})

module.exports = router;