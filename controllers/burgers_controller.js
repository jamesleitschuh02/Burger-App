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

module.exports = router;