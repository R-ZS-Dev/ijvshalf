const mysql = require("mysql");
require('dotenv').config();
var db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});
db.Promise = global.Promise;
global.db = db;

module.exports = db;

// const mysql = require("mysql");
// const db = mysql.createConnection({user: "root", host: "localhost", password: "", database: "ijvs"});

// global.db=db;
// module.exports={
//     db
// }
