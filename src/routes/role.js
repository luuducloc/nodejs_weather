const express = require('express');
const router = express.Router();
const roleController = require('../app/controllers/RoleController');

// router.post('/', roleController.create_new_role);
router.post('/create', roleController.create_new_role)
router.get('/create', roleController.create_index_role);
router.get('/', roleController.index);

module.exports = router;