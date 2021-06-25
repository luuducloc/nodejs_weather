const express = require('express');
const router = express.Router();
const getUserController = require('../app/controllers/GetUserController');


// router.get('/', getUserController.get_user);
router.get('/all', getUserController.get_all_users);
router.get('/:id', getUserController.get_user);
router.get('/:id/add-role', getUserController.update_role_user_index);
router.post('/:id/add-role', getUserController.udate_role_user);
module.exports = router;
