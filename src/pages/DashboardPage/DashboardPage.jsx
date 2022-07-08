import React from 'react';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import resumeConstructor from '../../utilities/helpers/ResumeConstructor'
import Layout from '../../components/Layout/Layout';
import {getResume} from '../../utilities/resume-service'

const testData = require('../../utilities/helpers/sampleUser');

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login');
  };

  async function handleClick() {
    const userResume = await getResume({id:user._id})
    console.log('this was returned for the user resume ' , userResume)
    resumeConstructor(userResume)
  }
  return (
    <Layout active={'dashboard'} user={user}>
      <>
        <div className='h-screen'>
          <div>Welcome, {user.name}</div>
          <button className="bg-red-400 px-4 py-2" onClick={handleLogOut}>
            Logout
          </button>
          <button onClick={handleClick}>Download Resume</button>
        </div>
      </>
    </Layout>
  );
}
