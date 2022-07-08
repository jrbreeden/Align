import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Layout from '../../components/Layout/Layout';
import Team from '../../components/Team/Team';

export default function HomePage({ user }) {

  return (

      <div className="MAIN DIV flex flex-col gap-y-72">
        <div className="CAROUSEL">
          <Carousel />
        </div>
        <div className="TEAMS">
          <Team />
        </div>
      </div>
  );
}
