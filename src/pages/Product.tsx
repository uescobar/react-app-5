import { Link } from "react-router-dom";

type Props = {};

function Product({}: Props) {
  return (
    <>
      <div>Página de productos</div>
      <Link to="/">Inicio</Link>
    </>
  );
}

export default Product;
