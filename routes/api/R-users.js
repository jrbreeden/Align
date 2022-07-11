const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/C-users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', usersCtrl.create);

// GET /api/users/:id
router.get('/:id', usersCtrl.getUser);

// POST /api/users/login
router.post('/login', usersCtrl.login);



// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

router.post('/update-usertags' , usersCtrl.updateUserTags)

module.exports = router;