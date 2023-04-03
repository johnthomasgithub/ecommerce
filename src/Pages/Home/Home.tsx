import React from "react";
import Header from "../../Components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../../Components/Dashboard";
const Home = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default Home;
