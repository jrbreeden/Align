import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';

import { getFeaturedJobs } from '../../utilities/users-service';
import { useState } from 'react';

export default function FeaturedJobs() {
  const [featuredJobs, setFeaturedJobs] = useState([]);
  const [search, setSearch] = useState('');
  return (
    <Spring
      from={{ opacity: 0, marginLeft: -1000 }}
      to={{ opacity: 1, marginLeft: 0 }}
    >
      {(props) => (
        <animated.div style={props}>
          <Layout active="featuredJobs">
            <div className="h-screen p-8">
              <div className="bg-gray-50 h-screen rounded drop-shadow-xl p-8">
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex items-stretch w-full mb-4">
                      <input
                        type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="button-addon2"
                        onClick={async () => {
                          const jobs = await fetch(
                            `https://remotive.com/api/remote-jobs?search=${search}&limit=10`
                          );
                          const response = await jobs.json();
                          setFeaturedJobs(response.jobs);
                          // const jobs = await getFeaturedJobs(search);
                          // const response = await jobs.json();
                          // console.log(response)
                        }}
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          class="w-4"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl font-bold text-center">
                  Featured Jobs
                </h1>

                <div className="jobs-div grid grid-cols-4 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                  {featuredJobs.map((job) => (
                    <div className="flex gap-x-60">
                      <div className="h-96 w-full min-h-full bg-gray-200 p-8 border border-1 border-gray-300 drop-shadow-2xl rounded">
                        <div className="header flex items-base justify-between">
                          <h1 className="text-xl font-bold text-center mb-10">
                            {job.title}
                          </h1>
                          <div className="font-bold overflow-hidden rounded-full w-14 h-14 flex items-center justify-center">
                            <img src={job.company_logo} alt="" />
                          </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                          <h2>
                            <span className="font-bold">Company:</span>{' '}
                            {job.company_name}
                          </h2>
                          <h2>
                            <span className="font-bold">Location:</span>{' '}
                            {job.candidate_required_location}
                          </h2>
                          <h2>
                            <span className="font-bold">Job type:</span>{' '}
                            {job.job_type}
                          </h2>
                          <h2>
                            <span className="font-bold">Date posted:</span>{' '}
                            {job.publication_date}
                          </h2>
                          <h2>
                            <span className="font-bold">Start date:</span>{' '}
                            07/06/2022
                          </h2>
                        </div>
                        <div>
                          <button className="bg-blue-500 px-4 py-2 font-semibold rounded text-white hover:bg-blue-400 mt-14">
                            Apply Job
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Layout>
        </animated.div>
      )}
    </Spring>
  );
}
