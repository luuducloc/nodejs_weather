const Permission_role = require('../models/Permission_role');

class Permission_Role_Controller {
    add_new_permission_role() {
        const permission_role = new Permission_role;
        permission_role.permission_name = ["", "", "", ""];
        permission_role.role_id = "60cac9e1cca8ff46b2eb43f0";
        console.log(permission_role)
        permission_role.save();
    }
};

module.exports = new Permission_Role_Controller();