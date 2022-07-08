import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as usersService from '../../utilities/users-service';

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
      <div className="bg-grey-lighter min-h-screen flex flex-col">
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
      </div>
    </>
  );
}
