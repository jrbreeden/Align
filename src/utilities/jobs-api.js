import sendRequest from './send-request';

const BASE_URL = '/api/jobs';

export function getTrackedJobs(id) {

  return sendRequest(`${BASE_URL}/trackedJobs/${id}`, 'GET');
}
