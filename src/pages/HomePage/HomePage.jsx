import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Layout from '../../components/Layout/Layout';
import Team from '../../components/Team/Team';
import resumeConstructor from './ResumeConstructor';

const testData = require('./sampleUser');

export default function HomePage({ user }) {
  console.log('test data is ', testData);
  function handleClick() {
    resumeConstructor(testData);
  }
  return (
    <Layout active={'home'} user={user}>
      <button onClick={handleClick}>Download Resume</button>
      <div className="MAIN DIV flex flex-col gap-y-72">
        <div className="CAROUSEL">
          <Carousel />
        </div>
        <div className="TEAMS">
          <Team />
        </div>
      </div>
    </Layout>
  );
}
