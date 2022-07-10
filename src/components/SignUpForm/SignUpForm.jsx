/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { signUp } from '../../utilities/users-service';
import { Spring, animated } from 'react-spring';
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/images/signupImg.jpg';

export default function SignUpForm({ setUser }) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: '',
  });

  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // We don't want to send the confirm or error properties
      // Let's make a copy of this.state (we never want to directly modify the state obj)
      const formData = { ...data };
      delete formData.error;
      delete formData.confirm;
      const user = await signUp(formData);
      setUser(user);
      if (user) navigate('/construction');
    } catch {
      // An error occurred
      setData({ ...data, error: 'Sign Up Failed - Try Again!' });
    }
  };

  const handleChange = (evt) => {
    // Unlike setters in function components,
    // this.setState MERGES the provided object, it does
    // NOT replace it
    setData({ ...data, [evt.target.name]: evt.target.value, error: '' });
  };

  const disable = data.password !== data.confirm;
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
                style={{ height: '70vh' }}
              >
                <div
                  className="hidden bg-cover lg:block lg:w-2/3 rounded"
                  style={{
                    width: '60vh',
                    backgroundImage: `url(${signupImg})`,
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
                        Signup to create an account
                      </p>
                    </div>

                    <div className="mt-8">
                      <form onSubmit={handleSubmit}>
                        <div>
                          <label
                            for="name"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                            id="email"
                            placeholder="e.g. John Doe"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                        <div>
                          <label
                            for="email"
                            className="block mb-2 text-sm text-gray-600 dark:text-gray-200 mt-8"
                          >
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                            id="email"
                            placeholder="Align@executive.com"
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
                            value={data.password}
                            onChange={handleChange}
                            id="password"
                            placeholder="Your Password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>
                        <div className="mt-6">
                          <div className="flex justify-between mb-2">
                            <label
                              for="password"
                              className="text-sm text-gray-600 dark:text-gray-200"
                            >
                              Confirm Password
                            </label>
                          </div>

                          <input
                            type="password"
                            name="confirm"
                            value={data.confirm}
                            onChange={handleChange}
                            id="password"
                            placeholder="Confirm Password"
                            className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                        </div>

                        <div className="mt-6">
                          <button
                            type="submit"
                            className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                          >
                            Sign up
                          </button>
                        </div>
                      </form>

                      <p className="mt-6 text-sm text-center text-gray-400">
                        have an account yet?{' '}
                        <Link
                          to="/login"
                          className="text-blue-500 focus:outline-none focus:underline hover:underline"
                        >
                          Sign in
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
            {data.error && (
              <p className="error-message  mb-4 text-center bg-red-400 p-2 text-white rounded font-bold">
                &nbsp;{data.error}
              </p>
            )}
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="name"
                placeholder="Full Name"
                value={data.name}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="email"
                placeholder="Email"
                value={data.email}
                onChange={handleChange}
                required
              />

              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="password"
                placeholder="Password"
                value={data.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-sky-500"
                name="confirm"
                placeholder="Confirm Password"
                value={data.confirm}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className={`w-full text-center py-3 rounded ${
                  disable ? 'bg-green-300' : 'bg-green-600'
                }  text-white hover:bg-green-dark focus:outline-none my-1 font-bold`}
                disabled={disable === true}
              >
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the{' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-dark mt-6">
            Already have an account?{' '}
            <Link
              to="/login"
              className="no-underline border-b border-blue text-purple-800 font-semibold"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div> */}
    </>
  );
}
