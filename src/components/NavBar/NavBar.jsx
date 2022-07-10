/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Align6.png';
import sample from '../../assets/images/sample.jpg';
import { logOut } from '../../utilities/users-service';
import { useNavigate, useLocation } from 'react-router-dom';

export default function NavBar({ active, user, setUser }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState('');
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login');
    setIsShow(false);
  };

  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    console.log(location);
    setCurrentPath(location.pathname);
    console.log('wtf', currentPath);
  }, [location]);

  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <div className="flex gap-x-10">
            <Link to="/profle" className="flex items-center">
              <img src={Logo} className="mr-3 h-6 sm:h-9" alt="" />
            </Link>
            {user && (
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link
                      to="/profile"
                      className={`text-white bg-none ${
                        location.pathname === '/profile' &&
                        'bg-blue-800 px-4 py-1 rounded'
                      }`}
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/construction"
                      className={`text-white bg-none ${
                        location.pathname === '/construction' &&
                        'bg-blue-800 px-4 py-1 rounded'
                      }`}
                    >
                      Resume Builder
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/featured-jobs"
                      className={`text-white bg-none ${
                        location.pathname === '/featured-jobs' &&
                        'bg-blue-800 px-4 py-1 rounded'
                      }`}
                    >
                      Search Jobs
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="left nav-items">
            {!user && (
              <div
                className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                id="mobile-menu-2"
              >
                <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <li>
                    <Link
                      to="/signup"
                      className={`text-white bg-none ${
                        location.pathname === '/signup' &&
                        'bg-blue-800 px-4 py-1 rounded'
                      }`}
                    >
                      Signup
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/login"
                      className={`text-white bg-none ${
                        location.pathname === '/login' &&
                        'bg-blue-800 px-4 py-1 rounded'
                      }`}
                    >
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <div className={`${!user && 'hidden'}flex items-center md:order-2`}>
              <button
                type="button"
                class={`${
                  !user && 'hidden'
                } flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600`}
                id="user-menu-button"
                ariaExpanded="false"
                dataDropdown-toggle="dropdown"
                onClick={() => setIsShow(!isShow)}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-8 h-8 rounded-full"
                  src={sample}
                  alt="user photo"
                />
              </button>

              {/* <!-- Dropdown menu --> */}
              <div
                className={`${
                  !isShow && 'hidden'
                } z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 absolute`}
                id="dropdown"
              >
                <div className="py-3 px-4">
                  <span class="block text-sm text-gray-900 dark:text-white">
                    {user && user.name}
                  </span>
                  <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                    {user && user.email}
                  </span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                  <li>
                    <button
                      className="w-full block py-2 px-4 text-sm text-red-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-red-500 dark:hover:text-white"
                      onClick={handleLogOut}
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="mobile-menu-2"
                type="button"
                class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu-2"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  class="hidden w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <nav className="bg-gray-800" style={{ height: '10vh' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" style={{ height: '10vh' }}>
          <div className="relative flex items-center justify-between h-16" style={{ height: '10vh' }}>
            {active ?
              (<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to='/'><img
                    className="hidden lg:block w-auto"
                    style={{ height: '8vh' }}
                    src={Logo}
                    alt="Align"
                  /></Link>
                  <Link to='/profile' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Profile</button></Link>
                  <Link to='/construction' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Resume Editor</button></Link>
                    <Link to='/featured-jobs' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Featured Jobs</button></Link>
                  <Link to='/search-jobs' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Search Jobs</button></Link>
                  <button className="bg-red-400 px-4 py-2" onClick={handleLogOut}>
                    Logout
                  </button>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                  </div>
                </div>
              </div>) :
              (<>
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex-shrink-0 flex items-center"><Link to='/'><img
                    className="hidden lg:block w-auto"
                    style={{ height: '11vh' }}
                    src={Logo}
                    alt="Align"
                  /></Link></div></div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Link
                    to="/login"
                    className={`${active === 'login' ? 'bg-gray-900' : null
                      } text-white px-3 py-2 rounded-md text-sm font-medium `}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className={`${active === 'signup' ? 'bg-gray-900' : null
                      } text-white px-3 py-2 rounded-md text-sm font-medium `}
                  >
                    Signup
                  </Link>
                  {user ? (
                    <h2
                      to="/signup"
                      className={`${active === 'signup' ? 'bg-gray-900' : null
                        } text-white px-3 py-2 rounded-md text-sm font-medium ${active ? 'hidden' : null
                        }`}
                    >
                      Welcome, {user.name}!
                    </h2>
                  ) : null}
                </div>
              </>
              )
            }

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
      </nav> */}
    </>
  );
}
