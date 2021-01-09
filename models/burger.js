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
    updateOne: function(condition,cb){
        orm.updateOne("burgers",condition,function(res) {
            cb(res);
        });
    },
    deleteOne: function(condition,cb){
        orm.deleteOne("burgers",condition,function(res){
            cb(res);
        });
    }
};

module.exports = burger;