const express = require('express');
const burger = require('../models/burger.js');

const router = express.Router();

//Create Routes
router.get("/",function(req,res){
    burger.selectAll(function(data) {
        const obj = {
            burgers: data
        };
        res.render("index",obj);
    });
});

router.post("/api/burgers",function(req,res){
    console.log(req.body.burger_name);
    console.log(req.body.devoured);
    
    burger.insertOne([req.body.burger_name,req.body.devoured === "true"?1:0],
        function(result){
            res.json({id: result.insertId});
        });
});

router.put("/api/burgers/:id",function(req,res){
    burger.updateOne(req.params.id,req.body.devoured,function(result){
        res.status(200).end();
    });
});

router.delete("/api/burgers/:id",function(req,res) {
    burger.deleteOne(req.params.id,function(result){
        res.status(200).end();
    });
});

module.exports = router;