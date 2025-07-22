import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./userPages/SignUp";
import Profile from "./userPages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
