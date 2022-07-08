const Resume = require('../api/C-jobs');
const AppliedJobs = require('../../models/M-appliedJobs');

async function appliedJobs(req, res) {
  console.log(
    'getting applied jobs - curr in controller my reqbody is ',
    req.body
  );
  try {
    const appJobs = await AppliedJobs.findOne({ user: req.body.id });
    //console.log('i am sending back applied jobs ', appJobs);
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

async function stopTracking(req,res){
  console.log('in c jobs with ' , req.body)

  AppliedJobs.updateOne({user:req.body.user_id} , {$pull:{appliedJobList:{_id:req.body.job_id}}}).then((change)=>{
    console.log(change)
    res.status(200).json({ Message: 'Successfully updated job!' });
  }).catch((err)=>{
    console.log('There was an error with stopping tracking. ' ,err)
    res.status(500).json({ Message: error.message });
  })

}

async function trackJob(req,res){
  //console.log('in track job controller with ,', req.body)

  const jobList = await AppliedJobs.findOne({user:req.body.user})
try{
  if(req.body.apply)req.body.job.date_applied = Date.now()

  if(jobList){
    const myJob = jobList.appliedJobList.filter((job) => job.job_link===req.body.job.job_link)
    //console.log('my job list is ' , jobList, 'with appliedJobList', jobList.appliedJobList)
    if(!myJob.length){
      jobList.appliedJobList.push(req.body.job)
    }else{
      if(!myJob.date_applied && req.body.job.date_applied){
        console.log('attempting date applied change' , jobList.appliedJobList)
        console.log('index of job to edit is ', jobList.appliedJobList[jobList.appliedJobList.indexOf(myJob)])
        //jobList.appliedJobList[jobList.appliedJobList.indexOf(myJob)]= {...jobList.appliedJobList[jobList.appliedJobList.indexOf(myJob)], date_applied:req.body.job.date_applied}
      }else{
        console.log('Job already tracked!')
      }
    }
    jobList.save()
    //console.log('attempted update on.' , jobList)
    
  }else{
    AppliedJobs.createOne({
      user:user,
      appliedJobList:[req.body.job]
    }).then((change)=>{
      console.log('Created new list for user' ,change)
    })
  }
  res.status(200).json({ Message: 'Successfully updated job!' });
}catch(err){
  res.status(500).json({ Message: error.message });
}
}


module.exports = {
  appliedJobs,
  markJobAsApplied,
  stopTracking,
  trackJob,
};
