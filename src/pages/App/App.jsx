import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import ConstructionPage from '../ConstructionPage/ConstructionPage';

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/dashboard"
            element={<DashboardPage user={user} setUser={setUser} exact />}
          />
          <Route
            path="/construction"
            element={<ConstructionPage user={user} setUser={setUser} exact />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route
            path="/signup"
            element={<SignUpPage user={user} setUser={setUser} />}
            exact
          />
          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
            exact
          />
        </Routes>
      )}
    </main>
  );
}
