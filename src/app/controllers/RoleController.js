const Role = require('../models/Role');
const mongosee = require('mongoose')
const permissionRoleController = require('../controllers/Permission_Role_Controller');
const User = require('../models/User');
const Permission = require('../models/Permission1');
const Permission_role = require('../models/Permission_role');
class RoleController {
    index(req, res) {
        Permission.find({}, )
        res.render('list_roles');
    }

    // create_new_role(req, res, next) {
    //     const role = new Role(req.body);
    //     role.created_by = mongosee.Types.ObjectId(req.signedCookies.user_id);
    //     role.user_id = mongosee.Types.ObjectId(req.signedCookies.user_id);
    //     console.log(role);
    //     role.save();
    //     res.redirect('/role');
    // }

    async create_index_role(req, res, next) {
        let permission_list = [];
        await Permission.find({}, (err, permissions) => {
            if (!err) {
                permission_list = permissions.map(permission => permission.toObject());
            } else {
                console.log('Error permission load');
            }
        });
        console.log(permission_list);
        res.render('create_role', {permissions: permission_list});

    }
    async create_new_role(req, res, next) {
        const role = new Role(req.body);
        const permission_role = new Permission_role();
        role.created_by = mongosee.Types.ObjectId(req.signedCookies.user_id);
        role.save();

        permission_role.role_id = role._id;
        permission_role.permission_id = req.body.permission;
        console.log(permission_role);
        permission_role.save();
        console.log(role._id);
        console.log(req.body);

    }
}

module.exports = new RoleController();