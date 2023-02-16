module.exports = {
    'view': (req, res) => {
        db.query("Select id, yyear_id, volumeNo, (SELECT yearNo FROM yyear WHERE id=yyear_id) AS yearNo From vvolume ORDER BY yyear_id", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                var currentYearId = 0;
                var yyearArray = [];
                result.forEach((element1) => {
                    if (currentYearId != element1.yyear_id) {
                        var vvolumeArray = [];
                        result.forEach(element2 => {
                            if (element1.yyear_id == element2.yyear_id) {
                                vvolumeArray.push(element2);
                            }
                        });
                        yyearArray.push({
                            year: element1.yearNo,
                            volumes: vvolumeArray
                        });
                        currentYearId = element1.yyear_id
                    }
                });
                res.send(yyearArray);
            }
        })
    }
}