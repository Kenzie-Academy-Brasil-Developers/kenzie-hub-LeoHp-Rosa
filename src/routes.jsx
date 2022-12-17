import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const ChangeRoutes = ({ openModal, setModalAdd, setModalEdit }) => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
};

export default ChangeRoutes;
