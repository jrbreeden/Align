const Resume = require('../api/C-jobs');
const AppliedJobs = require('../../models/M-appliedJobs')

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

async function appliedJobs(req,res){
  console.log('getting applied jobs - curr in controller my reqbody is ' , req.body)
  try{
    const appJobs = await AppliedJobs.findOne({user : req.body.id})
    console.log('i am sending back applied jobs ' , appJobs)
    res.json(appJobs)
  }catch(e){
    console.log('Error finding applied jobs for user ' , req)
    res.status(400).json(e);
  }
}

module.exports = {
  fetchTrackedJobs,
  appliedJobs
};
