/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Align6.png'
export default function NavBar({ active, user }) {
  return (
    <>
      <nav className="bg-gray-800" style={{height:'10vh'}}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" style={{height:'10vh'}}>
          <div className="relative flex items-center justify-between h-16"style={{height:'10vh'}}>
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Link to='/'><img
                  className="hidden lg:block w-auto"
                  style={{height:'11vh'}}
                  src={Logo}
                  alt="Align"
                /></Link>
                <Link to='/profile' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                  Applied Jobs</button></Link>
                  <Link to='/construction' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                  Construction</button></Link>
                  <Link to='/featured-jobs' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                  Featured Jobs</button></Link>
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <Link
                    to="/"
                    className={`${
                      active === 'home' ? 'bg-gray-900' : null
                    } text-white px-3 py-2 rounded-md text-sm font-medium ${
                      active === 'construction' || active === 'dashboard' || active === 'featuredJobs'
                        ? 'hidden'
                        : null
                    }`}
                  >
                    Home
                    
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <Link
                to="/login"
                className={`${
                  active === 'login' ? 'bg-gray-900' : null
                } text-white px-3 py-2 rounded-md text-sm font-medium ${
                  active === 'construction' || active === 'dashboard'|| active === 'featuredJobs'
                    ? 'hidden'
                    : null
                }`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={`${
                  active === 'signup' ? 'bg-gray-900' : null
                } text-white px-3 py-2 rounded-md text-sm font-medium ${
                  active === 'construction' || active === 'dashboard' || active === 'featuredJobs'
                    ? 'hidden'
                    : null
                }`}
              >
                Signup
              </Link>
              {user ? (
                <h2
                  to="/signup"
                  className={`${
                    active === 'signup' ? 'bg-gray-900' : null
                  } text-white px-3 py-2 rounded-md text-sm font-medium ${
                    active === 'construction' ? 'hidden' : null
                  }`}
                >
                  Welcome, {user.name}
                </h2>
              ) : null}
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#"
              className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Team
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Projects
            </a>

            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
