import { Spring, animated } from 'react-spring';
import { useState, useEffect } from 'react';

export default function JobCard({ job, status, user, markJobAsApplied, trackJob }) {

  return (
    <Spring
      from={{ opacity: 0, marginLeft: -10 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <div
            className="flex flex-col justify-between items-left justify-around min-h-full bg-gray-200 p-8 border border-1 border-gray-300 drop-shadow-2xl rounded"
            style={{ height: '30rem' , width:'30rem' }}
          >
            <div className="header flex items-base justify-between">
              <a href={job.job_link}>
                <h1 className="text-xl font-bold text-center mb-10">
                  {job.position}
                </h1>
              </a>
              <div className="font-bold overflow-hidden rounded-full w-14 h-14 flex items-center justify-center ml-4">
                <img src={job.logoUrl} alt={job.company} />
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <h2>
                <span className="font-bold">Company:</span> {job.company}
              </h2>
              <h2>
                <span className="font-bold">Location:</span> {job.location}
              </h2>
              <h2>
                <span className="font-bold">Job type:</span> {job.jobType}
              </h2>

              <h2>
                <span className="font-bold">Date applied:</span>{' '}
                {job.date_applied ? job.date_applied : 'No application yet!'}
              </h2>
            </div>

            <div className="flex gap-x-4">
              {job.date_applied === null && (
                <>
                  <button
                    className="bg-blue-500 px-4 py-2 font-semibold rounded text-white hover:bg-blue-400 mt-14"
                    onclick={() => trackJob(job.id)}
                  >
                    Track Jobs
                  </button>
{/*                  <button
                    className="bg-green-600 px-4 py-2 font-semibold rounded text-white hover:bg-green-500 mt-14"
                    onClick={() => {
                      markJobAsApplied(job._id, user._id);
                    }}
                  >
                    Mark as Applied
                  </button> */}
                </>
              )}
            </div>
          </div>
        </animated.div>
      )}
    </Spring>
  );
}
