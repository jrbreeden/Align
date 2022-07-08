import * as jobsAPI from './jobs-api';

export async function getAppliedJobs(id){
  const appliedJobs = await jobsAPI.getAppliedJobs(id)
  //console.log('user service return applied jobs of ' , appliedJobs)
  return appliedJobs
  //return appliedJobs ? JSON.parse(window.atob(appliedJobs.split('.')[1])).user : null
}

export async function markJobAsApplied(job_id, user_id){
  const jobsApplied = await jobsAPI.markJobAsApplied(job_id, user_id)
  //console.log('user service return applied jobs of ' , appliedJobs)
  return jobsApplied
  //return appliedJobs ? JSON.parse(window.atob(appliedJobs.split('.')[1])).user : null
}

export async function stopTrackingJob(job_id , user_id){
  const jobToStop = await jobsAPI.stopTrackingJob(job_id,user_id)
  return jobToStop
}

export async function trackJob(job, user, applied){
  const trackedJob = await jobsAPI.trackJob(job, user, applied)
  return trackedJob
}