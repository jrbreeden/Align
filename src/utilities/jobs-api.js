import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export function getAppliedJobs(id) {
  console.log('ive got user id ', id);
  return sendRequest(`${BASE_URL}/get-applied-jobs`, 'POST', id);
}

export function markJobAsApplied(job_id, user_id) {
  console.log('zzzz', job_id)
  return sendRequest(`${BASE_URL}/mark-as-applied/${job_id}`, 'PATCH', {
    user_id,
  });
}
 