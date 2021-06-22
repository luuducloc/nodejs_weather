const express = require('express');
const router = express.Router();
const getUserController = require('../app/controllers/GetUserController');


router.get('/', getUserController.get_user);
router.get('/all', getUserController.get_all_users);

module.exports = router;
