const express = require('express');
const router = express.Router();
const { addNewResume , getResume} = require('../../controllers/api/C-resume');

// POST /api/resume
router.post('/', addNewResume);

router.post('/get-resume' , getResume)

module.exports = router;
