import sendRequest from './send-request';

const BASE_URL = '/api/resume';

export function createResume(resume) {
  return sendRequest(`${BASE_URL}/`, 'POST', resume);
}

