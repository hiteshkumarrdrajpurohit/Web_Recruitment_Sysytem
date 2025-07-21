
import React, {useState}from 'react';
import { Routes, Route , Navigate } from 'react-router-dom';
import SignUp from './userPages/SignUp';

function App() {
  

  return (
    <>
      
       <Routes>

       <Route path="/"
        element = {<SignUp/>}
        />
       </Routes>
    </>
  )
}

export default App
