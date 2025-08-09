import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Foto full screen */}
      <div
       style={{
  backgroundImage: "url('/a.png')",
  backgroundSize: "contain",    // Para que se vea completa sin recortar
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  width: "100vw",
  height: "100vh",
            scrollSnapAlign: "start",

}}

      ></div>

      {/* Texto y botón */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          scrollSnapAlign: "start",
          padding: "0 20px",
          boxSizing: "border-box",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h1>La idea era imprimirte el poster de arriba tambien pero no hay nada abierto los sabados</h1>
        <button
          onClick={() => navigate("/password")}
          style={{
            marginTop: 20,
            padding: "12px 24px",
            fontSize: 18,
            borderRadius: 8,
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
          }}
        >
          Comenzar
        </button>
      </div>
    </div>
  );
};

export default Home;
