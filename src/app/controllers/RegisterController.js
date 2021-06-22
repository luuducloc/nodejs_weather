const User = require('../models/User');
const md5 = require('md5');
class RegisterController {
    index(req, res) {
        res.render('register');
    }

    registerHandler(req, res) {
        const user = new User(req.body);
        user.password = md5(user.password);
        user.save();
        res.redirect('/login');
    }
}

module.exports = new RegisterController;