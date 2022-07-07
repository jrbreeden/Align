const Resume = require('../api/C-jobs');
const AppliedJobs = require('../../models/M-appliedJobs');

async function appliedJobs(req, res) {
  console.log(
    'getting applied jobs - curr in controller my reqbody is ',
    req.body
  );
  try {
    const appJobs = await AppliedJobs.findOne({ user: req.body.id });
    console.log('i am sending back applied jobs ', appJobs);
    res.json(appJobs);
  } catch (e) {
    console.log('Error finding applied jobs for user ', req);
    res.status(400).json(e);
  }
}

async function markJobAsApplied(req, res) {
  console.log(req.params.job_id);
  console.log(req.body);
  try {
    const updatedJob = await AppliedJobs.update(
      {
        user: req.body.user_id,
        "appliedJobList._id": req.params.job_id,
      },
      {
        $set: {
          "appliedJobList.$.date_applied": Date.now(),
        },
      }
    );
    console.log(updatedJob);
    res.status(200).json({ Message: 'Successfully updated job!' });
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
  // console.log(
  //   'getting applied jobs - curr in controller my reqbody is ',
  //   req.body
  // );
  // try {
  //   const appJobs = await AppliedJobs.findOne({ user: req.body.id });
  //   console.log('i am sending back applied jobs ', appJobs);
  //   res.json(appJobs);
  // } catch (e) {
  //   console.log('Error finding applied jobs for user ', req);
  //   res.status(400).json(e);
  // }
}

module.exports = {
  appliedJobs,
  markJobAsApplied,
};
