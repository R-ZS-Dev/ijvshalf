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
                res.send(result);
            }
        })
    },
    'singlefull': (req, res) => {
        db.query("Select * From archive_table WHERE id='"+req.params.id+"'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
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
    }
}