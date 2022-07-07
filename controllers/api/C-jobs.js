const Resume = require('../api/C-jobs');

const fetchTrackedJobs = async (req, res) => {
  let trackedJobs;
  Resume.find({ user: req.body.id })
    .then((response) => {
      trackedJobs = response;
      console.log('neewwResume', trackedJobs);
      res.status(200).json(trackedJobs);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  fetchTrackedJobs,
};
