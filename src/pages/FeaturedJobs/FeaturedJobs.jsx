/* eslint-disable react-hooks/exhaustive-deps */
import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import JobCard from '../../components/JobCard/JobCard';
import { useState } from 'react';
import { useEffect } from 'react';
import optimizeResume from '../../utilities/helpers/ResumeOptimizer';
import resumeConstructor from '../../utilities/helpers/ResumeConstructor';
import { getResume } from '../../utilities/resume-service';
import { getOneUser } from '../../utilities/users-service'

export default function FeaturedJobs({
  user,
  setUser,
  getUser,
  markAsApplied,
  stopTracking,
  trackJob,
  jobsWatched,
  setResponse,
}) {
  const [featuredJobs, setFeaturedJobs] = useState(
    localStorage.getItem('featuredJobs')
      ? JSON.parse(localStorage.getItem('featuredJobs'))
      : []
  );

  async function handleClick() {
    const userResume = await getResume({ id: user._id });
    console.log('this was returned for the user resume ', userResume);
    resumeConstructor(userResume, `${user.name}_Master_Resume`);
  }

  async function handleClickOptimized(keyWordsArr, name) {
    const userResume = await getResume({ id: user._id });
    console.log('this was returned for the user resume ', userResume);
    resumeConstructor(optimizeResume(keyWordsArr, userResume), name);
  }

  useEffect(async () => {
    try {
      const myUser = await getOneUser(user._id)
      if(myUser){
      let keysMap = {}
      myUser.tags.forEach((tag) => {
        if (keysMap[tag]) {
          keysMap[tag]++
        } else {
          keysMap[tag] = 1
        }
      })

      const search = Object.keys(keysMap).map((tag) => {
        return [keysMap[tag], tag]
      }).sort(function (a, b) {
        return b[0] - a[0]
      }).slice(0, 3).map((topTags)=>topTags[1]).join(',')
      console.log('searching for ' , search)
      const jobs = await fetch(
        `https://remotive.com/api/remote-jobs?search=${search}&limit=6`
      );

      const response = await jobs.json();

      const jobConverter = [];
      response.jobs.forEach((job) => {
        jobConverter.push({
          position: job.title,
          company: job.company_name,
          logoUrl: job.company_logo,
          location: job.candidate_required_location,
          jobType: job.job_type,
          job_link: job.url,
          resume_link: null,
          job_date_posted: job.publication_date,
          date_applied: null,
        });
      });
      setFeaturedJobs(jobConverter);
    }}catch (error) {
  console.log(error);
}
}, []);
return (
  <Spring
    from={{ opacity: 0, marginLeft: -1000 }}
    to={{ opacity: 1, marginLeft: 0 }}
  >
    {(props) => (
      <animated.div style={props}>

        <div className="flex flex-col w-full justify-center items-center">
          <div className="p-16">
            {featuredJobs.length > 0 && (
              <h1 className="text-5xl font-bold text-center mb-14 text-white oswald">
                Featured Jobs
              </h1>

            )}
            <br />
            <div className="jobs-div grid grid-cols-3 grid-rows-auto justify-around gap-y-10 gap-x-8" >

              {featuredJobs.map((job) => (
                <JobCard
                  job={job}
                  jobsWatched={jobsWatched}
                  handleClick={handleClick}
                  markAsApplied={markAsApplied}
                  trackJob={trackJob}
                  user={user}
                  isFetched={true}
                />
              ))}
            </div>
          </div>
        </div>
      </animated.div>
    )}
  </Spring>
);
}
