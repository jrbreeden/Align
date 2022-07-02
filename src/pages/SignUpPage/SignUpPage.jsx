import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
export default function SignUpPage({ setUser }) {
  return (
    <>
      <NavBar />
      <SignUpForm setUser={setUser} />
    </>
  );
}
