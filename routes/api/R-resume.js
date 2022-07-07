const express = require('express');
const router = express.Router();
const { addNewResume , getResume} = require('../../controllers/C-resume');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/resume
router.post('/', addNewResume);

router.post('/get-resume' , getResume)

module.exports = router;
