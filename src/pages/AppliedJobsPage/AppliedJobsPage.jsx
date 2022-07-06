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
    }

    return (
        <Layout active={'profile'} user={user}>
            <div className="flex items-center justify-center gap-x-96 mt-20">
                <h1>Applied Jobs</h1>
            </div>
        </Layout>
    )
}