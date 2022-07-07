import * as resumeAPI from './resume-api';
import * as userService from './users-service'

export async function createResume(resume) {
  const newResume = await resumeAPI.createResume(resume);
}
/* 
export async function getResume(id){
  resumeAPI.getResume(id)
} */