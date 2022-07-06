import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import{getAppliedJobs} from '../../utilities/users-service'

export default function AppliedJobsPage({ user }) {
    const [ appliedJobs , setAppliedJobs]= useState(null)

    useEffect(()=>{
        populateJobs()
    },[])

    async function populateJobs(){
        const jobs = await getAppliedJobs({id:user._id})
        console.log(jobs)
    }

    return (
        <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <Layout active="featuredJobs">
                <div className="flex-col w-screen justify-center items-center">
                <div className="p-24">
                  <h1 className="text-4xl font-bold text-center">
                    Tracked Jobs
                  </h1>
                  <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                    {[1, 2, 3, 4,6,7,8,9,9,9,9,9,9].map((test) => (
                      <div className="flex gap-x-60">
                        <div className="h-96 w-full min-h-full bg-gray-200 p-8 border border-1 border-gray-300 drop-shadow-2xl rounded">
                          <div className="header flex items-base justify-between">
                            <h1 className="text-xl font-bold text-center mb-10">
                              Senior React Developer
                            </h1>
                            <div className="font-bold border border-2 border-black rounded-full w-14 h-14 flex items-center justify-center">
                              Logo
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <h2>
                              <span className="font-bold">Company:</span> Google
                              Inc.
                            </h2>
                            <h2>
                              <span className="font-bold">Location:</span>{' '}
                              Endicott, NY
                            </h2>
                            <h2>
                              <span className="font-bold">Job type:</span>{' '}
                              Full-time
                            </h2>
                            <h2>
                              <span className="font-bold">Date posted:</span>{' '}
                              04/20/2022
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
                  <br /><br />
                  
                  <div className="p-24">
                  <h1 className="text-4xl font-bold text-center">
                    Applied Jobs
                  </h1>
                  <div className="jobs-div grid grid-cols-3 grid-rows-auto mt-8 justify-between gap-y-10 gap-x-8">
                    {[1, 2, 3, 4 ].map((test) => (
                      <div className="flex gap-x-60">
                        <div className="h-96 w-full min-h-full bg-gray-200 p-8 border border-1 border-gray-300 drop-shadow-2xl rounded">
                          <div className="header flex items-base justify-between">
                            <h1 className="text-xl font-bold text-center mb-10">
                              Senior React Developer
                            </h1>
                            <div className="font-bold border border-2 border-black rounded-full w-14 h-14 flex items-center justify-center">
                              Logo
                            </div>
                          </div>
                          <div className="flex flex-col gap-y-2">
                            <h2>
                              <span className="font-bold">Company:</span> Google
                              Inc.
                            </h2>
                            <h2>
                              <span className="font-bold">Location:</span>{' '}
                              Endicott, NY
                            </h2>
                            <h2>
                              <span className="font-bold">Job type:</span>{' '}
                              Full-time
                            </h2>
                            <h2>
                              <span className="font-bold">Date posted:</span>{' '}
                              04/20/2022
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
    )
}