const User = require('../models/User');
const mongosee = require('mongoose');
const Role = require('../models/Role');

class GetUserController {

    get_user(req, res) {
        User.findById({_id: req.params.id}, (err, user) => {
            user = user.toObject();
            console.log(typeof user);
            res.render('infor-user', {
                last_name: user.last_name,
                first_name: user.first_name,
                email: user.email
            });
        })


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

    async update_role_user_index(req, res) {
        let email;
        let role_list = [];
        await User.findById({ _id: req.params.id }, (err, user) => {
            user = user.toObject();
            email = user.email;
        })

        await Role.find({}, (err, roles) => {
            role_list = roles.map(role => role.toObject());
        })
        res.render('add_role_user', {
            email: email,
            role_list: role_list
        });
    }

    async udate_role_user(req, res) {
        const role_id = req.body.role_id;
        // await User.updateOne({_id: req.params.id}, {role_id: role_id});

        await User.findById({_id: req.params.id}, (err, user) => {
            if (!err) {
                user.role_id = mongosee.Types.ObjectId(role_id);
                console.log(user)
                user.save();
                res.redirect('/');
            } else {
                console.log(err);
            }
        })
    }
}

module.exports = new GetUserController;
