import * as resumeAPI from './resume-api';

export async function createResume(resume) {
  const token = await resumeAPI.createResume(resume);
  localStorage.setItem('token', token);
  console.log('updated token to' , token)
  return token;
}

export async function getResume(id){
  return resumeAPI.getResume(id)
}