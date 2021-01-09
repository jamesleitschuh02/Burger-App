// Import MySQL connection.
const connection = require("../config/connection.js"); // ./connection.js?

const orm = {
    selectAll: function(table, cb){
        const queryString = "SELECT * FROM " + table;
        connection.query(queryString,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    // INSERT INTO burgers (burger_name,devoured) VALUES (?,?)
    insertOne: function(table,val,cb){
        console.log(val);
        const queryString = "INSERT INTO " + table + " (burger_name,devoured) VALUES (?,?)";
        connection.query(queryString,val,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table,condition,cb){
        const queryString = "UPDATE " + table + " SET devoured = 1 WHERE id = " + condition;

        connection.query(queryString,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(table,condition,cb){
        const queryString = "DELETE FROM " + table + " WHERE id = " + condition;
        
        connection.query(queryString,function(err,result) {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;