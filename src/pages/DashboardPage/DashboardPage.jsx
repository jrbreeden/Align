import React from 'react';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';
import resumeConstructor from '../../assets/helpers/ResumeConstructor'
import Layout from '../../components/Layout/Layout';
import getResume from '../../utilities/resume-service'

const testData = require('../../assets/helpers/sampleUser');

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login');
  };

  function handleClick() {
    //const userResume = await getResume(user._id)
    //resumeConstructor(userResume);
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
