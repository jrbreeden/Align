import React from 'react';
import { logOut } from '../../utilities/users-service';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ user, setUser }) {
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut();
    setUser(null);
    navigate('/login')
  };
  return (
    <>
      <div>Welcome, {user.name}</div>
      <button className="bg-red-400 px-4 py-2" onClick={handleLogOut}>
        Logout
      </button>
    </>
  );
}
