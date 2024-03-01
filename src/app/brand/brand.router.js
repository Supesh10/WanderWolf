const router = require("express").Router()


router.get("/brand", (req, res, next) =>{}) 

router.get("/brand/list-home", (req, res, next) =>{})

router.get("/brand/:id", (req, res, next) =>{}) 

router.get("/brand/:slug/detail", (req, res, next) =>{})

router.post("/brand",(req, res, next) =>{})

router.put("/brand/:id", (req, res, next) =>{})

router.delete("/brand/:id", (req, res, next) =>{})

module.exports = router;