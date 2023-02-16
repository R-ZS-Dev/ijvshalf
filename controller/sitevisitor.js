module.exports={
    'createVistor': (req, res) => {
        const vistors = req.body.vistors;

        db.query("INSERT INTO sitevisitor (vistors) VALUES (?)",)
            [vistors], (err, result) => {
                if(err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            }
    },

    'editVistor': (req, res) => {
        db.query("Update sitevisitor SET vistors='"+req.params.no+"' WHERE id='"+req.params.id+"'", (err, result) => {
            if(err) {
                console.log(err);
            } else {
                res.send(result[0]);
            }
        }) 
    }
}