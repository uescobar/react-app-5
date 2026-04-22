import { useNavigate } from "react-router-dom";

export default function Home() {
  // throw new Error("Error! Chanchito triste :(");
  const navigate = useNavigate();
  return (
    <>
      <h2>Hola mundo! componente Home.tsx</h2>
      <button onClick={() => navigate("/products")}>Enviar</button>
    </>
  );
}
