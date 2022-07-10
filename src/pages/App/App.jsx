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
import ProfilePage from '../ProfilePage/ProfilePage';
import Layout from '../../components/Layout/Layout';


export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <Layout active={true} setUser={setUser} user={user}>
        <Routes>
          <Route
            path="/construction"
            element={<ConstructionPage user={user} setUser={setUser} exact />}
          />
          <Route
            path="/featured-jobs"
            element={<FeaturedJobs user={user} setUser={setUser} exact />}
          />
          <Route
            path="/profile"
            element={<ProfilePage user={user} />}
          />
          <Route path="/*" element={<Navigate to='/profile'/>} exact />
        </Routes>
        </Layout>
      ) : (
        <Layout active={false} setUser={setUser}>
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
        </Layout>
      )}
    </main>
  );
}
