const express = require('express');
const router = express.Router();
const { fetchTrackedJobs , appliedJobs} = require('../../controllers/api/C-jobs');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/resume
router.get('/trackedJobs/:id', fetchTrackedJobs);

router.post('/get-applied-jobs' , appliedJobs)

module.exports = router;
