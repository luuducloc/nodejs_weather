const express = require('express');
const router = express.Router();
const forgotPasswordController = require('../app/controllers/ForgotPasswordController');

router.post('/', forgotPasswordController.send_email)
router.get('/', forgotPasswordController.index);

module.exports = router;
