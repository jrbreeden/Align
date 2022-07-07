import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export function getTrackedJobs(id) {

  return sendRequest(`${BASE_URL}/trackedJobs/${id}`, 'GET');
}

export function getAppliedJobs(id){
  console.log('ive got user id ' , id )
  return sendRequest(`${BASE_URL}/get-applied-jobs` , 'POST' , id);
}
