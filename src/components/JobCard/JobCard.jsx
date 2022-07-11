import { Spring, animated } from 'react-spring';
import ClipLoader from 'react-spinners/ClipLoader';
import { useState, useEffect } from 'react';
import moment from 'moment';

export default function JobCard({
  job,
  status,
  user,
  markAsApplied,
  trackJob,
  stopTracking,
  isFetched,
  isLoading,
  jobsWatched,
  handleClick,
}) {
  let isTracked = false;
  console.log('jobs watched card is ', jobsWatched);
  if (
    isFetched &&
    (jobsWatched.tracked.filter((wJob) => wJob.job_link === job.job_link)
      .length ||
      jobsWatched.applied.filter((wJob) => wJob.job_link === job.job_link)
        .length)
  ) {
    isTracked = true;
  }
  return (
    <>
      {isLoading ? (
        <div className="flex flex-col items-center justify-center">
          <ClipLoader color={'#ADF5FF'} loading={isLoading} size={150} />
        </div>
      ) : (
        <Spring
          from={{ opacity: 0, marginLeft: -10 }}
          to={{ opacity: 1, marginLeft: 0 }}
        >
          {(props) => (
            <animated.div style={props}>
              <div
                className="flex flex-col justify-between items-left justify-around min-h-full bg-gray-200 p-8 border border-1 border-gray-300 drop-shadow-2xl rounded"
                style={{ height: '30rem', width: '30rem' }}
              >
                <div className="header flex items-base justify-between">
                  <a href={job.job_link}>
                    <h1 className="text-xl font-bold text-center oswald">
                      {job.position}
                    </h1>
                  </a>
                  <div className="font-bold overflow-hidden rounded-full w-14 h-14 flex items-center justify-center ml-4">
                    <img src={job.logoUrl} alt={job.company} />
                  </div>
                </div>
                <div className="flex flex-col gap-y-2">
                  <h2>
                    <span className="font-bold oswald">Company:</span>{' '}
                    {job.company}
                  </h2>
                  <h2>
                    <span className="font-bold oswald">Location:</span>{' '}
                    {job.location}
                  </h2>
                  <h2>
                    <span className="font-bold oswald">Job type:</span>{' '}
                    {job.jobType}
                  </h2>

                  <h2>
                    <span className="font-bold oswald">Date applied:</span>{' '}
                    {job.date_applied
                      ? `${moment(new Date(job.date_applied)).format(
                          'MMMM Do YYYY, h:mm:ss a'
                        )}`
                      : 'No application yet!'}
                  </h2>
                </div>

                <div className="flex flex-col gap-y-2">
                  {isFetched && !isTracked ? (
                    <>
                      <button
                        className="hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-sky-500 shadow-lg shadow-sky-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          trackJob(job, user._id, false);
                        }}
                      >
                        Track this Job
                      </button>
                      <button
                        className="hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          handleClick(
                            job.tags,
                            `${user.name} ${job.position} ${job.company}`
                          );
                        }}
                      >
                        Download Optimized Resume
                      </button>
                      <button
                        className="hover:bg-rose-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-rose-500 shadow-lg shadow-rose-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          trackJob(job, user._id, true);
                        }}
                      >
                        Mark as Applied
                      </button>
                    </>
                  ) : isFetched ? (
                    <button
                      className="hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                      onClick={() => {
                        handleClick(
                          job.tags,
                          `${user.name} ${job.position} ${job.company}`
                        );
                      }}
                    >
                      Download Optimized Resume
                    </button>
                  ) : job.date_applied === null && !isFetched ? (
                    <>
                      <button
                        className="hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-red-500 shadow-lg shadow-red-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          stopTracking(job._id, user._id);
                        }}
                      >
                        Stop Tracking
                      </button>
                      <button
                        className="hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-green-500 shadow-lg shadow-green-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          markAsApplied(job._id, user._id);
                        }}
                      >
                        Mark as Applied
                      </button>
                      <button
                        className="hover:bg-sky-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-sky-500 shadow-lg shadow-sky-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={handleClick}
                      >
                        Download Optimized Resume
                      </button>
                    </>
                  ) : !isFetched ? (
                    <>
                      <button
                        className="hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline bg-red-500 shadow-lg shadow-red-500/50 transition duration-200 ease-in-out hover:scale-110 mb-1"
                        onClick={() => {
                          stopTracking(job._id, user._id);
                        }}
                      >
                        Stop Tracking
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </animated.div>
          )}
        </Spring>
      )}
    </>
  );
}
