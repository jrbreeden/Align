import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Layout from '../../components/Layout/Layout';

export default function HomePage({user}) {
  return (
    <Layout active={'home'} user={user}>
      <div className="h-screen">
        <Carousel />
      </div>
    </Layout>
  );
}
