module.exports = {
    'viewVistor': (req, res) => {
        const vistors = 1;
        db.query("SELECT vistors FROM sitevisitor", (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result[0]);
            }
        });
    },
    'newVistor': (req, res) => {
        db.query("SELECT vistors FROM sitevisitor", (err1, result1) => {
            db.query("UPDATE sitevisitor SET vistors='"+(result1[0].vistors+1)+"'", (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send(true);
                }
            });
        });
    }
}