const express = require('express');
const router = express.Router();

// Import controller function
const { getHomePage, getLoginPage, getRegister, getPasswordReset, getDashboard, getBookNow, getSecondAuth } = require('../controllers/mainController');

router.get('/', getHomePage);
router.get('/login', getLoginPage);
router.get('/register', getRegister);
router.get('/password-reset', getPasswordReset);
router.get('/dashboard', getDashboard);
router.get('/book-now', getBookNow);
router.get('/register/auth', getSecondAuth);


module.exports =  router;