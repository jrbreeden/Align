import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavBar/NavBar';

export default function HomePage() {
  return (
    <>
      <NavBar active={'home'} />
      <div className='h-screen'>
        <Carousel />
      </div>
      <Footer />
    </>
  );
}
