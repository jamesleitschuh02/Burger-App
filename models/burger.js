const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne: function(cb){

    },
    updateOne: function(cb){

    }
};

module.exports = burger;