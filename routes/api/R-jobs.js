const express = require('express');
const router = express.Router();
const {
  appliedJobs,
  markJobAsApplied,
  stopTracking,
  trackJob,
} = require('../../controllers/api/C-jobs');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/get-applied-jobs', appliedJobs);
router.patch('/mark-as-applied/:job_id', markJobAsApplied);
router.post('/stop-tracking' , stopTracking)
router.post('/track-job' , trackJob)
module.exports = router;
