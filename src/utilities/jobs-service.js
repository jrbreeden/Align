import * as jobsAPI from './jobs-api';

export async function getTrackedJobs(id) {
  const jobs = await jobsAPI.getTrackedJobs(id);
  console.log(jobs)
}
