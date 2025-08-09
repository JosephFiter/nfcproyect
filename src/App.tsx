import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PasswordPage from "./PasswordPage.tsx";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/password" element={<PasswordPage />} />
    </Routes>
  );
};

export default App;
