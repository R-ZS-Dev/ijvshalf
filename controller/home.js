// const { db } = require("../connection");

module.exports={
    'home' : (req, res) =>{
        db.query("Select * From archive_table LIMIT 5", (err, result) => {
            if(err){
                console.log(err);
            } else {
                res.send(result);
            }
        })
    }
}