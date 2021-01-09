const orm = require("../config/orm.js");

const burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insertOne: function(val,cb){
        orm.insertOne("burgers",val,function(res){
            cb(res);
        });
    },
    updateOne: function(cb){

    }
};

module.exports = burger;