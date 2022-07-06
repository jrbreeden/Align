/* eslint-disable no-unreachable */
import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

export default function Layout({ children, active, user }) {
  return (
    <>
      <div className='bg-gray-200'>
        <header style={{minHeight:'10vh'}}>
          <NavBar active={active} user={user} />
        </header>
        <main style={{minHeight:'80vh'}}>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
