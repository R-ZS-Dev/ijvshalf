module.exports = {
    'view': (req, res) => {
        db.query("Select *, (SELECT yearNo FROM yyear WHERE id=yyear_id) AS yearNo, (SELECT volumeNo FROM vvolume WHERE id=vvolume_id) AS volumeNo FROM archive_table WHERE vvolume_id='"+req.params.id+"'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    },
    'single': (req, res) => {
        db.query("Select * FROM archive_table WHERE id='"+req.params.id+"'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result[0]);
            }
        })
    },
    'singlefull': (req, res) => {
        db.query("Select *, DATE_FORMAT(received_date, '%d/%m/%y') AS received_date2, DATE_FORMAT(revised_date, '%d/%m/%y') AS revised_date2, DATE_FORMAT(accepted_date, '%d/%m/%y') AS accepted_date2, DATE_FORMAT(available_online_date, '%d/%m/%y') AS available_online_date2 From archive_table WHERE id='"+req.params.id+"'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result[0]);
            }
        })
    },
    'rightsidefile': (req, res) => {
        db.query("Select * From archive_table WHERE id='"+req.params.id+"'", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    },
    'figure': (req, res) => {
        db.query("Select * From archive_figure WHERE archive_article_id='"+req.params.id+"'", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    },
    'download_plus': (req, res) => {
        db.query("UPDATE  archive_table SET downloads='"+req.params.no+"' WHERE id='"+req.params.id+"'", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("success");
            }
        })
    },
    'view_plus': (req, res) => {
        db.query("UPDATE  archive_table SET views='"+req.params.no+"' WHERE id='"+req.params.id+"'", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send("success");
            }
        })
    },
    'search_title': (req, res) => {
        db.query("SELECT * FROM archive_table WHERE article_title LIKE '%"+req.params.search+"%' ", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result);
            }
        })
    },
}