import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const ChangeRoutes = ({ openModal }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage openModal={openModal} />} />
    </Routes>
  );
};

export default ChangeRoutes;
