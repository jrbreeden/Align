import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import JobCard from '../../components/JobCard/JobCard';
import resumeConstructor from '../../utilities/helpers/ResumeConstructor'
import {getResume} from '../../utilities/resume-service'
import { testData , words } from '../../utilities/helpers/optimizeResumeTestData'
import optimizeResume from '../../utilities/helpers/ResumeOptimizer';


export default function AppliedJobsPage({ user , setUser, getUser, markAsApplied , stopTracking, trackJob, jobsWatched , setResponse, getAppliedJobs, setJobsWatched}) {

  async function handleClick() {
    const userResume = await getResume({ id: user._id });
    console.log('this was returned for the user resume ', userResume);
    resumeConstructor(userResume , `${user.name}_Master_Resume`);
  }

  async function handleClickOptimized(keyWordsArr, name) {
    const userResume = await getResume({ id: user._id });
    console.log('this was returned for the user resume ', userResume);
    resumeConstructor(optimizeResume(keyWordsArr, userResume) , name);
  }

  useEffect(() => {
    if(user) {(async function populateJobs() {
      const jobsWatched = await getAppliedJobs({ id: user._id });

      if (jobsWatched) {
        const tracked = jobsWatched.appliedJobList.filter(
          (job) => !job.date_applied
        );
        const applied = jobsWatched.appliedJobList.filter(
          (job) => job.date_applied
        );
        setJobsWatched({ tracked: tracked, applied: applied });
      }
      console.log('my applied jobs are initially ', jobsWatched);
    })()}
  }, [])

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div className="flex flex-col w-full justify-center items-center">
            <div className="p-16">
            <button 
            className="hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-blue-500 shadow-lg shadow-blue-500/50 transition duration-200 ease-in-out hover:scale-110" 
            onClick={handleClick}
            style={{height:'8vh' , width:'18vw', fontSize:'2vh'}}>Download Master Resume</button>
              </div>
              <div className="p-16">
                <h1 className="text-5xl font-bold text-center text-white oswald">Tracked Jobs</h1>
                <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                  {jobsWatched.tracked
                    ? jobsWatched.tracked.map((tj) => (
                        <JobCard
                          job={tj}
                          status={1}
                          markAsApplied={markAsApplied}
                          user={user}
                          stopTracking={stopTracking}
                          isFetched={false}
                          handleClick={handleClickOptimized}
                        />
                      ))
                    : null}
                  {jobsWatched.tracked.length === 0 && (
                    <h1 className='text-center text-4xl oswald'>No Tracked Jobs Found!</h1>
                  )}
                </div>
              </div>

              <div className="p-16">
              <h1 className="text-5xl font-bold text-center text-white oswald mb-8">
                Applied Jobs
              </h1>
              <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                {jobsWatched.applied
                  ? jobsWatched.applied.map((aj) => (
                      <JobCard
                      job={aj} handleClick={handleClick} jobsWatched={jobsWatched} markAsApplied={markAsApplied} trackJob={trackJob} user={user} isFetched={true}
                      />
                    ))
                  : null}
                  {jobsWatched.applied.length === 0 && (
                    <h1 className='text-center text-4xl oswald'>No Applied Jobs Found!</h1>
                  )}
              </div>
            </div>
            </div>
        </animated.div>
      )}
    </Spring>
  );
}
