/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/Align6.png'
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function NavBar({ active, user, setUser }) {
  const navigate = useNavigate()
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <>
      <nav className="bg-gray-800" style={{ height: '10vh' }}>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8" style={{ height: '10vh' }}>
          <div className="relative flex items-center justify-between h-16" style={{ height: '10vh' }}>
            {active ?
              (<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link to='/'><img
                    className="hidden lg:block w-auto"
                    style={{ height: '11vh' }}
                    src={Logo}
                    alt="Align"
                  /></Link>
                  <Link to='/profile' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Profile</button></Link>
                  <Link to='/construction' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
                    Resume Editor</button></Link>
                  <Link to='/featured-jobs' ><button className="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
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
                      } text-white px-3 py-2 rounded-md text-sm font-medium ${active === 'construction' || active === 'dashboard' || active === 'featuredJobs'
                        ? 'hidden'
                        : null
                      }`}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className={`${active === 'signup' ? 'bg-gray-900' : null
                      } text-white px-3 py-2 rounded-md text-sm font-medium ${active === 'construction' || active === 'dashboard' || active === 'featuredJobs'
                        ? 'hidden'
                        : null
                      }`}
                  >
                    Signup
                  </Link>
                  {user ? (
                    <h2
                      to="/signup"
                      className={`${active === 'signup' ? 'bg-gray-900' : null
                        } text-white px-3 py-2 rounded-md text-sm font-medium ${active === 'construction' ? 'hidden' : null
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
      </nav>
    </>
  );
}
