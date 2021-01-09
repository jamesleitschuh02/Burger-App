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

module.exports = router;