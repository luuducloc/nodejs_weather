const Permission = require('../models/Permission1');

class PermissionController {
    get_all_permission() {
        let list_permissions = [];
        Permission.find({}, (err, permissions) =>{
            list_permissions = permissions;
        })
    }

    add_permission() {
        const permission = new Permission();
        permission.name = 'Quản lý user';
        permission.save();
    }
};

module.exports = new PermissionController();
