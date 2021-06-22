const express = require('express');
const router = express.Router();
const homeController = require('../app/controllers/HomeController');
const loginRequire = require('../app/middleware/LoginRequire');


router.get('/',loginRequire.login_require, homeController.index);

module.exports = router;
