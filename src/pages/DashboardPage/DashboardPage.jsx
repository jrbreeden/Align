import React from 'react';


import Layout from '../../components/Layout/Layout';


const testData = require('../../utilities/helpers/sampleUser');

export default function Dashboard({ user, setUser }) {




  return (
      <>
        <div className='h-screen'>
          <div>Welcome, {user.name}!</div>


        </div>
      </>
  );
}
