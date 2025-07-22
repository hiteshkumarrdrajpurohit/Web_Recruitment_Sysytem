
import React, {useState}from 'react';
import { Routes, Route , Navigate } from 'react-router-dom';
import SignUp from './userPages/SignUp';
import ApplicationPage from './userPages/ApplicationPage';

function App() {
  

  return (
    <>
      
       <Routes>

       <Route path="/"
        element = {<SignUp/>}
        />

        <Route path="/application"
        element = {<ApplicationPage/>}
        />
       </Routes>
    </>
  )
}

export default App
