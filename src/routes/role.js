const express = require('express');
const router = express.Router();
const roleController = require('../app/controllers/RoleController');
const loginRequire = require('../app/middleware/LoginRequire');
// router.post('/', roleController.create_new_role);
router.post('/create', loginRequire.login_require, roleController.create_new_role)
router.get('/create', loginRequire.login_require, roleController.create_index_role);
router.get('/', loginRequire.login_require, roleController.index);

module.exports = router;