const express = require('express');
const router = express.Router();
const { fetchTrackedJobs } = require('../../controllers/api/C-jobs');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/resume
router.post('/tracked-jobs', fetchTrackedJobs);

module.exports = router;
