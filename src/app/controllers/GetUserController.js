const User = require('../models/User');

class GetUserController {
    get_user (req, res, next) {
        if (typeof req.query.user_id !== 'undefined') {
            User.find({_id: req.query.user_id}, (err, user) => {
                if (!err && user.length === 1) {
                    const last_name = user[0].last_name;
                    const first_name = user[0].first_name;
                    const email = user[0].email;

                    res.render('infor-user', {
                        last_name: last_name,
                        first_name: first_name,
                        email: email
                    });
                } else {
                    console.log(err)
                }

            })
        }
        next;

    }

    get_all_users(req, res) {
        User.find({}, (err, users) => {
            if (!err) {
                users = users.map(user => user.toObject())
                res.render('get-all-user', {users})
            } else {
                res.status(400).render('home', { error: 'Password or email correct!!!' });
            }
        });
    }
}

module.exports = new GetUserController;
