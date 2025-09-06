import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import RedirectPage from "./RedirectPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<RedirectPage />} />
      <Route path="*" element={<div>404 — Página no encontrada</div>} />
    </Routes>
  );
};

export default App;
