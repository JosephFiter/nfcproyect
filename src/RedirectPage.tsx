import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  useEffect(() => {
    console.log("RedirectPage mounted, id =", id);
    if (!id) return;

    // Si querés sólo redirigir cuando id === "1"
    if (id === "1") {
      // redirección a URL externa (YouTube)
      window.location.href = "https://www.youtube.com";
    }

    // Si querés redirigir para cualquier id:
    // window.location.href = "https://www.youtube.com";
  }, [id]);

  return (
    <div style={{ padding: 20 }}>
      <h2>Redirigiendo…</h2>
      <p>id detectado: {id}</p>
      <p>Si no pasa nada, abrí la consola del navegador (F12) y fijate errores.</p>
    </div>
  );
};

export default RedirectPage;
