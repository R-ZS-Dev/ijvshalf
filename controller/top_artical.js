module.exports={
    'top_artical' : (req,res) =>{
        db.query("SELECT * FROM top_cited_articles_table ORDER BY top_citations DESC", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
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