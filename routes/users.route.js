const express = require('express');
const router = express.Router();
const usersCtrl = require('../controllers/users.controllers')

/* GET users listing. */
router.get('/sign-up', usersCtrl.signUp)
router.get('/sign-in', usersCtrl.signIn)
router.post('/', usersCtrl.register)

module.exports = router;
