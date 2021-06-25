const User = require('../models/User');
const md5 = require('md5');
class LoginController {
    index(req, res) {
        res.render('login');
    };

    login_handler(req, res) {
        const email = req.body.email;
        const password = md5(req.body.password);
        User.find({email: email, password: password}, (err, user) => {
            if (!err || user.length === 1) {
                if (email === user[0].email && password === user[0].password){
                    res.cookie('user_id', user[0]._id, {
                        signed: true
                    });
                    res.redirect('/');
                }
            } else {
                res.status(400).render('login', { error: 'Password or email correct!!!' });
            }
        })
    }
}

module.exports = new LoginController;