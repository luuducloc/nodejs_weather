const User = require('../models/User');
class LoginRequire {
    login_require(req, res, next) {
        if (!req.signedCookies.user_id) {

            res.redirect('/login');
            return;
        }

        User.find({_id: req.signedCookies.user_id}, (err, user) => {
            const user_name = user[0].last_name + user[0].first_name;
            return;
        })

        res.locals.user = req.signedCookies.user_id;
        next();
    }
}

module.exports = new LoginRequire;