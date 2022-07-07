const express = require('express');
const router = express.Router();
const {
  appliedJobs,
  markJobAsApplied,
} = require('../../controllers/api/C-jobs');
// const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/get-applied-jobs', appliedJobs);
router.patch('/mark-as-applied/:job_id', markJobAsApplied);

module.exports = router;
