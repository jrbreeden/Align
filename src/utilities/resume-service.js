import * as resumeAPI from './resume-api';

export async function createResume(resume) {
<<<<<<< HEAD
  const token = await resumeAPI.createResume(resume);
  localStorage.setItem('token', token);
  console.log('updated token to' , token)
  return token;
=======
  try{
    
    const token = await resumeAPI.createResume(resume);
    localStorage.setItem('token', token);
    console.log('updated token to' , token)
    return true
  }catch(err){
    console.log('err creating resume' , err)
    return false
  }
>>>>>>> 9f4719e754eb2877bfc06af7409e1d57ba2abaea
}

export async function getResume(id){
  return resumeAPI.getResume(id)
}