import * as resumeAPI from './resume-api';

export async function createResume(resume) {
  const newResume = await resumeAPI.createResume(resume);
}

export async function getResume(id){
  return resumeAPI.getResume(id)
}