import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import {
  getAppliedJobs,
  markJobAsApplied,
  stopTrackingJob,
} from '../../utilities/jobs-service';
import JobCard from '../../components/JobCard/JobCard';
import resumeConstructor from '../../utilities/helpers/ResumeConstructor';
import { getResume } from '../../utilities/resume-service';

export default function AppliedJobsPage({ user }) {
  const [jobsWatched, setJobsWatched] = useState({
    tracked: [],
    applied: [],
  });

  const [response, setResponse] = useState({});

  const markAsApplied = async (job_id, user_id) => {
    const jobsApplied = await markJobAsApplied(job_id, user_id);
    setResponse(jobsApplied);
  };

  const stopTracking = async (job_id, user_id) => {
    const jobToStopTracking = await stopTrackingJob(job_id, user_id);
    setResponse(jobToStopTracking);
  };

  useEffect(() => {
    (async function populateJobs() {
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
      console.log('my applied jobs are ', jobsWatched);
    })();
  }, [response]);

  async function handleClick() {
    const userResume = await getResume({ id: user._id });
    console.log('this was returned for the user resume ', userResume);
    resumeConstructor(userResume);
  }
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
              >
                Download Resume
              </button>
            </div>
            <div className="p-16">
              <h1 className="text-4xl font-bold text-center oswald tracking-widest text-gray-200 mb-24">
                Tracked Jobs
              </h1>
              <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                {jobsWatched.tracked
                  ? jobsWatched.tracked.map((tj) => (
                      <JobCard
                        job={tj}
                        status={1}
                        markJobAsApplied={markAsApplied}
                        user={user}
                        stopTracking={stopTracking}
                        isFetched={false}
                      />
                    ))
                  : null}
                {jobsWatched.tracked.length === 0 && (
                  <h1 className="text-center text-2xl">
                    No Tracked Jobs Found!
                  </h1>
                )}
              </div>
            </div>
            <br />
            <br />
            <div class="grid grid-cols-1 divide-y-[3px] divide-blue-400 text-center w-3/5">
              <div></div>
              <div></div>
            </div>
            <div className="p-16">
              <h1 className="text-4xl font-bold text-center oswald tracking-widest text-gray-200 mb-24">
                Applied Jobs
              </h1>
              <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-between gap-y-10 gap-x-8">
                {jobsWatched.applied
                  ? jobsWatched.applied.map((aj) => (
                      <JobCard
                        job={aj}
                        status={2}
                        markJobAsApplied={markAsApplied}
                        user={user}
                        stopTracking={stopTracking}
                        isFetched={false}
                      />
                    ))
                  : null}
              </div>
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
