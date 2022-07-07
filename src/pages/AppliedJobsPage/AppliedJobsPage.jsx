import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';
import{getAppliedJobs} from '../../utilities/users-service'
import JobCard from '../../components/JobCard/JobCard'
export default function AppliedJobsPage({ user }) {
    const [ appliedJobs , setAppliedJobs]= useState({
      tracked:[],
      applied:[]
    })

    useEffect(()=>{
      (async function populateJobs(){
        const jobs = await getAppliedJobs({id:user._id})
        console.log('my applied jobs are ' ,jobs)
        setAppliedJobs({
          //tracked:jobs.appliedJobList.filter((job)=>!job.date_applied),
          //applied:jobs.appliedJobList.filter((job)=> job.date_applied),
        })
    })()
      }
    ,[])

  
    const job = {
        title:'Software eng',
        company_logo:'https://remotive.com/job/1224255/logo',
        company_name:'Google',
        candidate_required_location:'Seattle, WA',
        job_type:'FT',
        publication_date:'Tomorrow'
    }

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
                  <h1 className="text-4xl font-bold text-center">
                    Tracked Jobs
                  </h1>
                  <div className="jobs-div grid grid-cols-4 grid-rows-auto mt-8 justify-around gap-y-10 gap-x-8">
                    {[1, 2, 3, 4,6,7,8,9,9,9,9,9,9].map((test) => (
                      <JobCard job={job}  status={1}/>
                    ))}
                  </div>
                  </div>
                  <br /><br />
                  
                  <div className="p-16">
                  <h1 className="text-4xl font-bold text-center">
                    Applied Jobs
                  </h1>
                  <div className="jobs-div grid grid-cols-4 grid-rows-auto mt-8 justify-between gap-y-10 gap-x-8">
                    {[1, 2, 3, 4 ].map((test) => (
                     <JobCard job={job}  status={2}/>
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