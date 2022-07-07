import * as resumeAPI from './resume-api';

export async function createResume(resume) {
  const newResume = await resumeAPI.createResume(resume);
}
