import { Link, Navigate } from "react-router-dom";

type Props = {};

const useUser = () => undefined;

function Product({}: Props) {
  const user = useUser();

  if (!user) {
    return <Navigate to="/" />;
  }

  const products = [
    { id: 1, name: "iPhone" },
    { id: 2, name: "Android" },
  ];
  return (
    <>
      <div>Página de productos</div>
      <Link to="/">Inicio</Link>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Product;
