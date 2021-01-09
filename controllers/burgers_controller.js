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
    burger.insertOne(["burger_name","devoured"],
        [req.body.burger_name,req.body.devoured],
        function(result){
            res.json({id: result.insertId});
        });
});

module.exports = router;