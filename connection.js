const mysql = require("mysql");
const db = mysql.createConnection({user: "root", host: "localhost", password: "", database: "ijvs"});

global.db=db;
module.exports={
    db
}