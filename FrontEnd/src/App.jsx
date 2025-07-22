
import React, {useState}from 'react';
import { Routes, Route , Navigate } from 'react-router-dom';
import SignUp from './userPages/SignUp';
import UserHome from './userPages/UserHome';

function App() {
  

  return (
    <>
      
       <Routes>

       <Route path="/" element = {<SignUp/>}/>
          <Route path="/userHome" element={<UserHome />} /> 
       </Routes>
    </>
  )
}

export default App
