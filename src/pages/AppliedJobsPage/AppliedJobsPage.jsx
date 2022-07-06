import Layout from '../../components/Layout/Layout';
import { Spring, animated } from 'react-spring';
import { useEffect, useState } from 'react';

export default function AppliedJobsPage({ user }) {
    return (
        <Layout active={'profile'} user={user}>
            <h1>Applied Jobs</h1>
        </Layout>
    )
}