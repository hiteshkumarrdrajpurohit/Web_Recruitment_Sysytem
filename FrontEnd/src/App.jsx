
 


import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./userPages/SignUp";
import Profile from "./userPages/Profile";
import SignIn from './userPages/SignIn';
import UserHome from './userPages/UserHome';
import Home from './Home';


function App() {
  return (
    <>
       <Routes>
       <Route path="/" element = {<SignUp/>}/>
          <Route path="/userHome" element={<UserHome />} /> 
       </Routes>
        <Route path="/"
        element={<Home/>}
        />
        <Route path="/profile" element={<Profile />} />
       <Route path="/signUp"
        element = {<SignUp/>}
        />
        <Route path="/signIn"
        element = {<SignIn/>}
        />
        <Route path="/home"
          element={<UserHome />}
        />
       </Routes> 

    </>
  );
}

export default App;
