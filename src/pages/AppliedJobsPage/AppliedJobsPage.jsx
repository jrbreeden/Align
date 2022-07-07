import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import { getAppliedJobs } from '../../utilities/jobs-service';
import { getTrackedJobs } from '../../utilities/jobs-service';
import JobCard from '../../components/JobCard/JobCard';
export default function AppliedJobsPage({ user }) {
  const [jobsWatched, setJobsWatched] = useState({
    tracked: [],
    applied: [],
  });

  useEffect(() => {
    (async function populateJobs() {

      const jobsWatched = await getAppliedJobs({ id: user._id });

      if (jobsWatched) {
        const tracked = jobsWatched.appliedJobList.filter((job) => !job.date_applied)
        const applied = jobsWatched.appliedJobList.filter((job) => job.date_applied)
        setJobsWatched({ tracked: tracked, applied: applied });
      }
      console.log('my applied jobs are ', jobsWatched);
      //const trackedJobs = await getTrackedJobs(user._id);
      // console.log('wtf',trackedJobs)

      // console.log(trackedJobs)

      // setAppliedJobs((prevState) => ({ ...prevState, tracked: [...trackedJobs] }));
    })();
  }, []);

  const job = {
    title: 'Software eng',
    company_logo: 'https://remotive.com/job/1224255/logo',
    company_name: 'Google',
    candidate_required_location: 'Seattle, WA',
    job_type: 'FT',
    publication_date: 'Tomorrow',
  };

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <Layout active="featuredJobs">
            <div className="flex-col w-full justify-center items-center">
              <div className="p-16">
                <h1 className="text-4xl font-bold text-center">Tracked Jobs</h1>
                <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                  {jobsWatched.tracked ? jobsWatched.tracked.map((tj) => 
                    <JobCard job={tj} status={1} />
                  ) : null}
                </div>
              </div>
              <br />
              <br />

              <div className="p-16">
                <h1 className="text-4xl font-bold text-center">Applied Jobs</h1>
                <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-between gap-y-10 gap-x-8">
                  {jobsWatched.applied ? jobsWatched.applied.map((aj) => 
                    <JobCard job={aj} status={2} />
                  ) : null}
                </div>
              </div>
            </div>
          </Layout>
        </animated.div>
      )}
    </Spring>
  );
}
