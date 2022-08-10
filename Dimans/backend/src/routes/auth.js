const express = require('express');
const router = express.Router();
const { signup, signin, sendEmail, changePassword } = require('../controllers/auth');

const { validateSigninRequest, validateSignupRequest, isRequestValidated } = require('../validators/auth');



router.post('/login', validateSigninRequest, isRequestValidated, signin);
router.post('/signup', validateSignupRequest, isRequestValidated, signup);
router.post('/sendpasswordresetlink', sendEmail);

router.post('/changepassword', changePassword);


module.exports = router;