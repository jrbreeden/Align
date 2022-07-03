import React from 'react';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

import Layout from '../../components/Layout/Layout';

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login');
  };
  return (
    <Layout active={'dashboard'} user={user}>
      <>
        <div className='h-screen'>
          <div>Welcome, {user.name}</div>
          <button className="bg-red-400 px-4 py-2" onClick={handleLogOut}>
            Logout
          </button>
        </div>
      </>
    </Layout>
  );
}
