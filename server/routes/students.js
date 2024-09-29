const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const schema = require("../models/student");
router.get("/", (req, res) => {
    console.log("student");
    res.send("student router");
});

router.post("/", async(req, res) => {
    const s1 = new schema({
        name: req.body.name,
        roll: req.body.roll,
        section: req.body.section,
    });
    console.log(s1);
    try {
        console.log("saving");
        const a = await s1.save();
        res.send(a);
    } catch (error) {
        res.send(error);
    }
});
router.delete("/:roll",async(req,res)=>{
    const roll=req.params.roll;
    try{
        const a1=await schema.deleteMany({roll:roll})
        console.log(a1)
        res.send(a1)
    }
    catch(error){
        res.send(error)
    }
});

    

module.exports = router;