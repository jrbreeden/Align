import React, { useState } from 'react';
import { Routes, Route , Navigate} from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';
import LoginPage from '../LoginPage/LoginPage';
import DashboardPage from '../DashboardPage/DashboardPage';
import ConstructionPage from '../ConstructionPage/ConstructionPage';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';
import AppliedJobsPage from '../AppliedJobsPage/AppliedJobsPage';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Routes>
          <Route
            path="/dashboard"
            element={<DashboardPage user={user} setUser={setUser} exact />}
          />
          <Route
            path="/construction"
            element={<ConstructionPage user={user} setUser={setUser} exact />}
          />
          <Route
            path="/featuredJobs"
            element={<FeaturedJobs user={user} setUser={setUser} exact />}
          />
          <Route
            path="/profile"
            element={<AppliedJobsPage user={user} />}
          />
          <Route path="/*" element={<Navigate to='/dashboard'/>} exact />
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
          <Route path="/*" element={<Navigate to='/'/>} exact />
        </Routes>
      )}
    </main>
  );
}
