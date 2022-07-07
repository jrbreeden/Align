import * as jobsAPI from './jobs-api';

export async function getTrackedJobs(id) {
  const jobs = await jobsAPI.getTrackedJobs(id);
  // console.log(jobs)
  console.log('fk',jobs)
}


export async function getAppliedJobs(id){
  const appliedJobs = await jobsAPI.getAppliedJobs(id)
  //console.log('user service return applied jobs of ' , appliedJobs)
  return appliedJobs
  //return appliedJobs ? JSON.parse(window.atob(appliedJobs.split('.')[1])).user : null
}