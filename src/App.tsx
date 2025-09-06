import { BrowserRouter, Routes, Route } from "react-router-dom";
import RedirectPage from "./RedirectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta dinámica que captura el número */}
        <Route path="/:id" element={<RedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
