const express = require("express")
const router = express.Router()
const db = require("../models")


router.post("/new",(req,res)=>{
    db.Profile.create({
        display_name:req.body.display_name,
        email:req.body.email,
        UserId:req.body.UserId
    }).then(newProfile =>res.send(newProfile))
})

//rest API that will get specific userProfile by user id
router.get("/find/:id",(req,res)=>{
    db.Profile.findAll({
        where:{UserId:req.params.id},
        include:[db.User]
    }).then(profile=>res.send(profile))
})

module.exports = router