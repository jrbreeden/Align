const AppliedJobs = require('../../models/M-appliedJobs');

const fetchTrackedJobs = async (req, res) => {
  let trackedJobs;
  console.log(req.params.id);
  // AppliedJobs.find({ user: req.params.id })
  //   .then((response) => {
  //     trackedJobs = response.json();
  //     console.log('neewwResume', trackedJobs);
  //     res.status(200).json(trackedJobs);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  try {
    const jobs = await AppliedJobs.find({ user: req.params.id });
    console.log(jobs);
  } catch (error) {
    res.status(500).json({ Error: error });
  }
};

module.exports = {
  fetchTrackedJobs,
};
