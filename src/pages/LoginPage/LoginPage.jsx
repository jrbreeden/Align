import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import NavBar from '../../components/NavBar/NavBar'

export default function LoginPage({setUser}) {
  return (
    <>
        <NavBar />
        <LoginForm setUser={setUser}/>
    </>
  )
}
