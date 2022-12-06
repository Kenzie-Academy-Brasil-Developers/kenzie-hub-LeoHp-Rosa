import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const ChangeRoutes = ({ setUser, user }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage user={user} />} />
    </Routes>
  );
};

export default ChangeRoutes;
