const express = require('express')
const router = express.Router()
const signupController = require('../controllers/signup-controller')

router.route('/')
    .post(signupController.signup)

module.exports = router