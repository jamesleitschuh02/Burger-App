// Import MySQL connection.
const connection = require("../config/connection.js"); // ./connection.js?

function getQuery(table,condition,devouredState){
    if (devouredState === "1"){
        const statement = "UPDATE " + table + " SET devoured = 0 WHERE id = " + condition;
        return statement;
    }
    else{
        const statement = "UPDATE " + table + " SET devoured = 1 WHERE id = " + condition;
        return statement;
    }
}

const orm = {
    selectAll: function(table, cb){
        const queryString = "SELECT * FROM " + table;
        connection.query(queryString,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },

    insertOne: function(table,val,cb){
        console.log(val);
        const queryString = "INSERT INTO " + table + " (burger_name,devoured) VALUES (?,?)";
        connection.query(queryString,val,function(err,result){
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(table,condition,devouredState,cb){
        const queryString = getQuery(table,condition,devouredState);

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