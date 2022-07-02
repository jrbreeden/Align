import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import DashboardPage from '../DashboardPage/DashboardPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          {/* client-side route that renders the component instance if the path matches the url in the address bar */}
          <Route
            path="/dashboard"
            element={<DashboardPage user={user} setUser={setUser} />}
          />
        </Routes>
      ) : (
        // <AuthPage setUser={setUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage setUser={setUser} />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
        </Routes>
      )}
    </main>
  );
}
