module.exports = {
    'createUser': (req, res) => {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        const ph_num = req.body.ph_num;
        const email = req.body.email;
        const password = req.body.password;
        const user_address = req.body.user_address;
        const city_name = req.body.city_name;
        const country_name = req.body.country_name;

        db.query("INSERT INTO user_login (first_name, last_name, ph_num, email, password, user_address, city_name, country_name) VALUES (?,?,?,?,?,?,?,?)",
            [first_name, last_name, ph_num, email, password, user_address, city_name, country_name], (err, result) => {
                if (err) {
                    res.send({message: false, result: err});
                } else {
                    res.send({message: true, result: "Successfully Register"})
                }
            });
    },
    'loginUser': (req, res) => {
        var email = req.body.email;
        var password = req.body.password;
        db.query("SELECT * FROM user_login WHERE email = '" + email + "' AND password = '" + password + "'", (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result.length > 0 ? {'message' : true, 'loginid' : result[0].id} : {'message' : false, 'loginid' : 0});
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