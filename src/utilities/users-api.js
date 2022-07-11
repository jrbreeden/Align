import { getToken } from './users-service';
import sendRequest from './send-request';

const BASE_URL = '/api/users';

export function signUp(userData) {
  return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`);
}

export function updateUserTags(userTags,id){
  return sendRequest(`${BASE_URL}/update-usertags` , 'POST' , {userTags , id})
}

export function getOneUser(id){
  return sendRequest(`${BASE_URL}/${id}` , 'GET')
}