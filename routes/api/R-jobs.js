const express = require('express');
const router = express.Router();
const {
  appliedJobs,
  markJobAsApplied,
  stopTracking,
} = require('../../controllers/api/C-jobs');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/get-applied-jobs', appliedJobs);
router.patch('/mark-as-applied/:job_id', markJobAsApplied);
router.post('/stop-tracking' , stopTracking)

module.exports = router;
