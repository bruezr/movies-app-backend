const express = require('express');
const userController = require('../controllers/user');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/me', auth, userController.getUserInfo);

router.post('/', userController.postUser);

module.exports = router;
