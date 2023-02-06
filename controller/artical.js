module.exports = {
    'subarticle': (req, res) => {
        const article_title = req.body.article_title;
        const co_author_email = req.body.co_author_email;
        const dept = req.body.dept;
        const abstract = req.body.abstract;
        const keywords = req.body.keywords;

        db.query("INSERT INTO received_articles (article_title, co_author_email, dept, abstract, keywords) VALUES (?,?,?,?,?)",
            [article_title, co_author_email, dept, abstract, keywords], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("Article Submited");
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