module.exports = {
    'create': (req, res) => {
        const article_title = req.body.article_title;
        const co_author_email = req.body.co_author_email;
        const dept = req.body.dept;
        const abstract = req.body.abstract;
        const keywords = req.body.keywords;
        const user_login_id = req.body.user_login_id;
        const ms_file = req.body.file_docx;
        const potential_reviewer = req.body.file_pdf;

        db.query("INSERT INTO received_articles (article_title, co_author_email, dept, abstract, keywords, user_login_id, ms_file,potential_reviewer) VALUES (?,?,?,?,?,?,?,?)",
            [article_title, co_author_email, dept, abstract, keywords, user_login_id, ms_file, potential_reviewer], (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({ message: true, result: "Successfully Submit" });
                }
            });
    },
    'file_upload': (req, res) => {
        const file_pdf = req.files.file_pdf[0].path;
        const file_docx = req.files.file_docx[0].path;
        res.send({ file_pdf: file_pdf.substr(8, 50), file_docx: file_docx.substr(8, 50) });
        // const file_pdf = req.file_pdf;
        // const file_docx = req.file_docx;
        // res.send({file_pdf: file_docx});
        // if (!file) {
        //   const error = new Error("Please upload a file");
        //   error.httpStatusCode = 400;
        //   return next(error);
        // }
        // res.send({path: (file.path).substr(8,50)});
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