import React, { useState } from "react";

const PasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const correctPassword = "dedibujealmundo";

  const handleConfirm = () => {
    if (password === correctPassword) {
      window.location.href = "https://youtube.com";
    } else {
      alert("Contraseña incorrecta");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        padding: 20,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div style={{ overflowY: "auto" }}>
        <p>
        Antes de emprender esta aventura, sentí una mezcla de dudas y sueños que no me dejaban en paz. El deseo de encontrar algo más allá de lo visible me impulsaba, aunque el miedo al desconocido siempre estuviera presente. Sabía que debía seguir adelante, guiado por esa voz interna que me decía que lo extraordinario estaba esperando justo al final del camino.

Durante el día, intenté buscar un jardín especial, al límite misterioso, un nuevo destino oculto. La búsqueda parecía imposible, pero cada paso me acercaba más a descubrir aquello que estaba más allá de la vista común. Mientras caminaba entre senderos y susurros del viento, sentí que mi alma se llenaba de esperanza y que el mundo se abría para revelarme secretos escondidos. El camino no era fácil, pero la determinación era más fuerte que cualquier obstáculo.
        </p>
        <p>
     
        </p>
      </div>

      <div style={{ marginTop: 20 }}>
        <input
          type="password"
          placeholder="Ingrese contraseña sin espacios ni mayusculas"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: 10,
            fontSize: 16,
            borderRadius: 6,
            border: "1px solid #ccc",
            marginBottom: 12,
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={handleConfirm}
          style={{
            width: "100%",
            padding: 12,
            fontSize: 18,
            borderRadius: 6,
            border: "none",
            backgroundColor: "#28a745",
            color: "#fff",
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default PasswordPage;
