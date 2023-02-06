module.exports={
    'loginUser' : (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        db.query("SELECT * FROM user_login WHERE email = ? AND password = ?", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        });
    }
}