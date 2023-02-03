module.exports={
    'inpress' : (req,res) =>{
        db.query("Select * FROM inpress_table ORDER BY DESC LIMIT 5", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    }
}

// function inpress(req,res){
//     db.query("Select * FROM inpress_table", (err, result) => {
//         if(err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     })
// }

// module.exports={
//     inpress
// }