import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spring, animated } from 'react-spring';
import * as usersService from '../../utilities/users-service';
import loginImg from '../../assets/images/loginImg2.jpg'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    console.log('TESTING HERE!!')
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      if (user) navigate('/profile');
    } catch {
      setError('Log In Failed - Try Again!');
    }
  }

  return (
    <>
      <Spring
        from={{ opacity: 0, marginLeft: -1000 }}
        to={{ opacity: 1, marginLeft: 0 }}
      >
        {(props) => (
          <animated.div style={props}>
            <div className="bg-none flex items-center justify-center w-full rounded overflow-hidden mt-20">
              <div
                className="flex justify-center bg-gray-900 h-full w-1/2 rounded"
                style={{ height: '50vh' }}
              >
                <div
                  className="hidden bg-cover lg:block lg:w-2/3 rounded"
                  style={{
                    width: '60vh',
                    backgroundImage:
                    `url(${loginImg})`,
                  }}
                >
                  <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                      <h2 className="text-4xl font-bold text-white">Align</h2>

                      <p className="max-w-xl mt-3 text-gray-300">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. In autem ipsa, nulla laboriosam dolores,
                        repellendus perferendis libero suscipit nam temporibus
                        molestiae
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                  <div className="flex-1">
                    <div className="text-center">
                      <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">
                        Align
                      </h2>

                      <p className="mt-3 text-gray-500 dark:text-gray-300">
                        Sign in to access your account
                      </p>
                    </div>

                    <div className="mt-8">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label
                            for="email"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                          >
                            Email Address
                          </label>
                          <input
                            type="text"
                            name="email"
                            value={credentials.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="Align@Executive.com"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>

                        <div className="mt-6">
                          <div className="flex justify-between mb-2">
                            <label
                              for="password"
                              className="text-sm text-gray-600 dark:text-gray-200"
                            >
                              Password
                            </label>
                            <a
                              href="#"
                              className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                            >
                              Forgot password?
                            </a>
                          </div>

                          <input
                            type="password"
                            name="password"
                            value={credentials.password}
                            onChange={handleChange}
                            id="password"
                            placeholder="Enter Password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>

                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                          >
                            Sign in
                          </button>
                        </div>
                      </form>

                      <p className="mt-6 text-sm text-center text-gray-400">
                        have an account yet?{' '}
                        <Link
                          to="/signup"
                          className="text-blue-500 focus:outline-none focus:underline hover:underline"
                        >
                          Sign up
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </animated.div>
        )}
      </Spring>
      {/* <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100 px-6 py-8 rounded shadow-md text-black w-full">
            {error && (
              <p className="error-message  mb-4 text-center bg-red-400 p-2 text-white rounded font-bold">
                &nbsp;{error}
              </p>
            )}
            <h1 className="mb-8 text-3xl text-center">Sign In</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChange}
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1 font-bold"
              >
                Login
              </button>
            </form>
          </div>

          <div className="text-grey-dark mt-6">
            Don't have an account?{' '}
            <Link
              to="/signup"
              className="no-underline border-b border-blue text-purple-800 font-semibold"
            >
              Register
            </Link>
            .
          </div>
        </div>
      </div> */}
    </>
  );
}
