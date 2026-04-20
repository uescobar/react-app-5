import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Hola mundo! componente Home.tsx</h2>
      <button onClick={() => navigate("/product")}>Enviar</button>
    </>
  );
}
