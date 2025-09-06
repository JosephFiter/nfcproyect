// RedirectPage.tsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RedirectPage = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id === "1") {
      // Redirigir a YouTube
      window.location.href = "https://www.youtube.com";
    }
  }, [id]);

  return (
    <div>
      <p>Redirigiendo...</p>
    </div>
  );
};

export default RedirectPage;
